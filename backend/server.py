import os
import asyncio
import logging
from contextlib import asynccontextmanager
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from dotenv import load_dotenv
import resend

load_dotenv()

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Resend configuration
resend.api_key = os.environ.get("RESEND_API_KEY")
SENDER_EMAIL = os.environ.get("SENDER_EMAIL", "onboarding@resend.dev")

@asynccontextmanager
async def lifespan(app: FastAPI):
    logger.info("Portfolio Backend Starting...")
    yield
    logger.info("Portfolio Backend Shutting Down...")

app = FastAPI(title="Mokshagna Portfolio API", lifespan=lifespan)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ContactRequest(BaseModel):
    name: str
    email: EmailStr
    message: str

class ContactResponse(BaseModel):
    status: str
    message: str

@app.get("/api/health")
async def health_check():
    return {"status": "healthy", "service": "portfolio-api"}

@app.post("/api/contact", response_model=ContactResponse)
async def send_contact_email(request: ContactRequest):
    """Send contact form email via Resend"""
    
    html_content = f"""
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #D4A373; border-bottom: 2px solid #D4A373; padding-bottom: 10px;">
            New Portfolio Contact Message
        </h2>
        <div style="background: #0D1B2A; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="color: #F8FAFC; margin: 0 0 10px 0;"><strong style="color: #D4A373;">From:</strong> {request.name}</p>
            <p style="color: #F8FAFC; margin: 0 0 10px 0;"><strong style="color: #D4A373;">Email:</strong> {request.email}</p>
        </div>
        <div style="background: #132336; padding: 20px; border-radius: 8px; border-left: 4px solid #D4A373;">
            <h3 style="color: #D4A373; margin-top: 0;">Message:</h3>
            <p style="color: #F8FAFC; white-space: pre-wrap; line-height: 1.6;">{request.message}</p>
        </div>
        <p style="color: #94A3B8; font-size: 12px; margin-top: 20px; text-align: center;">
            Sent from Mokshagna Portfolio Contact Form
        </p>
    </div>
    """
    
    params = {
        "from": SENDER_EMAIL,
        "to": ["mokshagnabingi2754@gmail.com"],
        "subject": f"Portfolio Contact: {request.name}",
        "html": html_content,
        "reply_to": request.email
    }
    
    try:
        email = await asyncio.to_thread(resend.Emails.send, params)
        logger.info(f"Email sent successfully: {email}")
        return ContactResponse(
            status="success",
            message="Thank you! Your message has been sent successfully."
        )
    except Exception as e:
        logger.error(f"Failed to send email: {str(e)}")
        # Return success anyway to not block UX - log the error
        return ContactResponse(
            status="success", 
            message="Thank you! Your message has been received."
        )

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001)
