


# 🧠 NoteForge.ai

AI-powered note-taking app that lets you capture, organize, and enhance your thoughts through intelligent suggestions. Built with modern web technologies to create a seamless, secure, and performant experience.



---

## ✨ Features

- 📒 Rich text editor for composing and updating notes
- 🔐 Secure user authentication using **Clerk**
- ⚙️ Backend functionality with **Convex**
- 🤖 Text enhancement powered by **Google Generative AI**
- 🌐 Instant deployment and hosting via **Vercel**

---

## 🛠️ Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/)
- **Authentication**: [Clerk](https://clerk.dev/)
- **Backend**: [Convex](https://www.convex.dev/)
- **AI API**: [Google Generative AI](https://makersuite.google.com/app)
- **Hosting**: [Vercel](https://vercel.com)

---

## 🧩 Setup Instructions

1. **Clone the repo**
   ```bash
   git clone https://github.com/Himanizambare/NoteForge.ai-main
   cd NoteForge.ai-main
2.**Install dependencies**
  ```
    npm install
   ```
3.**Configure environment variables Create a .env.local file and include the following keys:**

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CONVEX_URL=your_convex_url
CONVEX_DEPLOYMENT=your_convex_deployment
NEXT_PUBLIC_GOOGLE_API_KEY=your_google_api_key
```

4.**Run the development server**

```
npm run dev
```



