import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";
import { sendContactFormEmail, sendCustomerConfirmationEmail } from "./emailService";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for contact form submissions
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate the incoming data
      const validatedData = insertContactSchema.parse(req.body);
      
      // Save contact submission to storage
      const submission = await storage.createContactSubmission(validatedData);
      
      // Send email notification to business owner
      const emailSent = await sendContactFormEmail({
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        address: validatedData.address || undefined,
        service: validatedData.service,
        message: validatedData.message || undefined,
        hearAbout: validatedData.hearAbout || undefined
      });
      
      // Send confirmation email to customer
      const confirmationSent = await sendCustomerConfirmationEmail({
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        address: validatedData.address || undefined,
        service: validatedData.service,
        message: validatedData.message || undefined,
        hearAbout: validatedData.hearAbout || undefined
      });
      
      // Return success response
      return res.status(201).json({
        message: "Contact form submitted successfully",
        submission: {
          id: submission.id,
          createdAt: submission.createdAt
        },
        emailSent,
        confirmationSent
      });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      
      // Handle validation errors
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({
          message: "Validation error",
          errors: validationError.details
        });
      }
      
      // Handle other errors
      return res.status(500).json({
        message: "An error occurred while processing your request"
      });
    }
  });

  // API routes for blog posts
  app.get("/api/blog", async (_req: Request, res: Response) => {
    try {
      const posts = await storage.getBlogPosts();
      // Map imageUrl to image field for frontend compatibility
      const mappedPosts = posts.map(post => ({
        ...post,
        image: post.imageUrl,
        date: post.publishedAt.toISOString().split('T')[0]
      }));
      return res.status(200).json(mappedPosts);
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      return res.status(500).json({
        message: "An error occurred while retrieving blog posts"
      });
    }
  });

  app.get("/api/blog/:slug", async (req: Request, res: Response) => {
    try {
      const post = await storage.getBlogPostBySlug(req.params.slug);
      
      if (!post) {
        return res.status(404).json({
          message: "Blog post not found"
        });
      }
      
      return res.status(200).json(post);
    } catch (error) {
      console.error("Error fetching blog post:", error);
      return res.status(500).json({
        message: "An error occurred while retrieving the blog post"
      });
    }
  });

  // API routes for portfolio projects
  app.get("/api/portfolio", async (req: Request, res: Response) => {
    try {
      const category = req.query.category as string | undefined;
      
      if (category && category !== 'all') {
        const projects = await storage.getPortfolioProjectsByCategory(category);
        return res.status(200).json(projects);
      } else {
        const projects = await storage.getPortfolioProjects();
        return res.status(200).json(projects);
      }
    } catch (error) {
      console.error("Error fetching portfolio projects:", error);
      return res.status(500).json({
        message: "An error occurred while retrieving portfolio projects"
      });
    }
  });

  app.get("/api/portfolio/:id", async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      
      if (isNaN(id)) {
        return res.status(400).json({
          message: "Invalid project ID"
        });
      }
      
      const project = await storage.getPortfolioProjectById(id);
      
      if (!project) {
        return res.status(404).json({
          message: "Portfolio project not found"
        });
      }
      
      return res.status(200).json(project);
    } catch (error) {
      console.error("Error fetching portfolio project:", error);
      return res.status(500).json({
        message: "An error occurred while retrieving the portfolio project"
      });
    }
  });

  // API routes for testimonials
  app.get("/api/testimonials", async (_req: Request, res: Response) => {
    try {
      const testimonials = await storage.getTestimonials(true); // Only approved testimonials
      return res.status(200).json(testimonials);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
      return res.status(500).json({
        message: "An error occurred while retrieving testimonials"
      });
    }
  });

  // Create HTTP server
  const httpServer = createServer(app);
  return httpServer;
}
