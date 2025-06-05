import { 
  users, type User, type InsertUser,
  contactSubmissions, type ContactSubmission, type InsertContact,
  blogPosts, type BlogPost, type InsertBlogPost,
  portfolioProjects, type PortfolioProject, type InsertPortfolioProject,
  testimonials, type Testimonial, type InsertTestimonial
} from "@shared/schema";

// CRUD operations interface
export interface IStorage {
  // Users
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Contact submissions
  createContactSubmission(submission: InsertContact): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
  getContactSubmission(id: number): Promise<ContactSubmission | undefined>;
  updateContactSubmissionStatus(id: number, status: string): Promise<ContactSubmission | undefined>;

  // Blog posts
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  getBlogPosts(): Promise<BlogPost[]>;
  getBlogPostById(id: number): Promise<BlogPost | undefined>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | undefined>;
  updateBlogPost(id: number, post: Partial<InsertBlogPost>): Promise<BlogPost | undefined>;
  deleteBlogPost(id: number): Promise<boolean>;

  // Portfolio projects
  createPortfolioProject(project: InsertPortfolioProject): Promise<PortfolioProject>;
  getPortfolioProjects(): Promise<PortfolioProject[]>;
  getPortfolioProjectById(id: number): Promise<PortfolioProject | undefined>;
  getPortfolioProjectsByCategory(category: string): Promise<PortfolioProject[]>;
  updatePortfolioProject(id: number, project: Partial<InsertPortfolioProject>): Promise<PortfolioProject | undefined>;
  deletePortfolioProject(id: number): Promise<boolean>;

  // Testimonials
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
  getTestimonials(approvedOnly?: boolean): Promise<Testimonial[]>;
  getTestimonialById(id: number): Promise<Testimonial | undefined>;
  updateTestimonial(id: number, testimonial: Partial<InsertTestimonial>): Promise<Testimonial | undefined>;
  deleteTestimonial(id: number): Promise<boolean>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactSubmissions: Map<number, ContactSubmission>;
  private blogPosts: Map<number, BlogPost>;
  private portfolioProjects: Map<number, PortfolioProject>;
  private testimonials: Map<number, Testimonial>;
  private currentIds: {
    users: number;
    contactSubmissions: number;
    blogPosts: number;
    portfolioProjects: number;
    testimonials: number;
  };

  constructor() {
    this.users = new Map();
    this.contactSubmissions = new Map();
    this.blogPosts = new Map();
    this.portfolioProjects = new Map();
    this.testimonials = new Map();
    this.currentIds = {
      users: 1,
      contactSubmissions: 1,
      blogPosts: 1,
      portfolioProjects: 1,
      testimonials: 1
    };

    // Initialize with default blog posts
    this.initializeDefaultData();
  }

  // Initialize with default data
  private initializeDefaultData() {
    // Add default blog posts
    const defaultBlogPosts: InsertBlogPost[] = [
      {
        title: "How to Identify Hail Damage on Your Roof",
        slug: "how-to-identify-hail-damage",
        excerpt: "Learn the telltale signs of hail damage and what steps to take if you suspect your roof has been compromised after a storm.",
        content: `<p>Hail storms can cause significant damage to your roof, often in ways that aren't immediately visible from the ground. In this guide, we'll walk you through how to identify hail damage on different types of roofing materials.</p>
                <h2>Signs of Hail Damage on Asphalt Shingles</h2>
                <ul>
                  <li>Random damage with no pattern</li>
                  <li>Black spots where granules have been knocked away</li>
                  <li>Shiny asphalt where granules are missing</li>
                  <li>Soft spots that feel like a bruise on an apple</li>
                  <li>Cracks or holes in the shingle</li>
                </ul>
                <h2>Metal Roofing Hail Damage</h2>
                <ul>
                  <li>Dents or dimples in the metal surface</li>
                  <li>Scratches or abrasions in protective coating</li>
                  <li>Damaged or dented flashing</li>
                </ul>
                <h2>What to Do If You Suspect Hail Damage</h2>
                <ol>
                  <li>Safely inspect from the ground first using binoculars</li>
                  <li>Document the date and time of the storm</li>
                  <li>Take photos of any hail on the ground with a measuring device</li>
                  <li>Contact a professional roofing inspector</li>
                  <li>Call your insurance company to report the damage</li>
                </ol>
                <p>Remember, climbing onto your roof can be dangerous. It's always best to have a professional roofing contractor inspect for damage. At Spencer Roofing Solutions, we offer free post-storm inspections to help you determine if you have a valid insurance claim.</p>`,
        imageUrl: "/images/haildamagepic.jpg",
        publishedAt: new Date("2023-06-15T12:00:00Z"),
        tags: ["hail damage", "roof inspection", "insurance claims"]
      },
      {
        title: "The Best Roofing Materials for Colorado's Climate",
        slug: "best-roofing-materials-colorado",
        excerpt: "Discover which roofing materials stand up best to Colorado's unique climate challenges, from hail to intense sun and everything in between.",
        content: `<p>Colorado's climate presents unique challenges for roofing materials. From intense UV exposure at high altitude to severe hailstorms and significant temperature fluctuations, your roof needs to be tough enough to handle it all.</p>
                <h2>Asphalt Shingles</h2>
                <p>Still the most popular choice for Colorado homes:</p>
                <ul>
                  <li>Impact-resistant shingles (Class 4) offer the best protection against hail</li>
                  <li>Look for shingles with high UV ratings for our intense sunshine</li>
                  <li>Architectural or dimensional shingles provide better wind resistance</li>
                  <li>Most economical option with a typical lifespan of 20-30 years</li>
                </ul>
                <h2>Metal Roofing</h2>
                <p>Gaining popularity in Colorado for good reason:</p>
                <ul>
                  <li>Superior longevity (40-70 years)</li>
                  <li>Excellent fire resistance</li>
                  <li>Energy efficient - reflects heat rather than absorbing it</li>
                  <li>Handles snow load well with smooth surface allowing snow to slide off</li>
                  <li>Can withstand winds up to 140 mph</li>
                </ul>
                <h2>Stone-Coated Steel</h2>
                <p>A premium option that offers the best of both worlds:</p>
                <ul>
                  <li>The strength and durability of metal with the aesthetic of traditional shingles</li>
                  <li>Excellent impact and fire resistance</li>
                  <li>50+ year lifespan</li>
                  <li>Lightweight yet extremely durable</li>
                </ul>
                <h2>Concrete and Clay Tile</h2>
                <p>For a distinctive Southwestern look:</p>
                <ul>
                  <li>Beautiful aesthetic that complements certain architectural styles</li>
                  <li>Extremely long-lasting (50+ years)</li>
                  <li>Excellent fire resistance</li>
                  <li>Note: Requires reinforced roof structure due to weight</li>
                </ul>
                <p>When choosing a roofing material for your Colorado home, consider factors beyond just price: insurance discounts for impact-resistant materials, energy efficiency, and long-term durability all affect the true lifetime cost of your roof.</p>`,
        imageUrl: "https://picsum.photos/600/400?random=101",
        publishedAt: new Date("2023-05-28T14:30:00Z"),
        tags: ["roofing materials", "colorado climate", "hail resistance"]
      },
      {
        title: "When to Repair vs. Replace Your Roof",
        slug: "repair-vs-replace-roof",
        excerpt: "Is it time for a full roof replacement, or can repairs extend your roof's life? This guide helps you make the right decision for your home.",
        content: `<p>One of the most common questions homeowners face when dealing with roof damage is whether to repair or replace their roof. This decision impacts both your home's protection and your finances.</p>
                <h2>Signs Your Roof Might Only Need Repairs</h2>
                <ul>
                  <li>Damage is confined to a small area (less than 30% of the roof)</li>
                  <li>The roof is relatively new (less than 10 years old)</li>
                  <li>Missing or damaged shingles in isolated areas</li>
                  <li>Minor leaks that can be traced to specific points</li>
                  <li>No signs of sagging or structural damage</li>
                </ul>
                <h2>Signs You Likely Need a Roof Replacement</h2>
                <ul>
                  <li>Roof is approaching or beyond its expected lifespan (20+ years for standard asphalt)</li>
                  <li>Widespread damage across multiple areas</li>
                  <li>Shingles that are curling, cracking, or losing granules throughout the roof</li>
                  <li>Multiple or extensive leaks</li>
                  <li>Sagging areas indicating potential structural issues</li>
                  <li>Significant storm or hail damage across the roof</li>
                </ul>
                <h2>Cost Considerations</h2>
                <p>While repairs are less expensive in the short term, they might not be economical if your roof is older or has multiple issues. Consider:</p>
                <ul>
                  <li>If repairs would cost more than 30% of a replacement, replacement often makes more financial sense</li>
                  <li>Multiple repair jobs over time can exceed the cost of a single replacement</li>
                  <li>Insurance may cover replacement for storm damage but not for age-related issues</li>
                </ul>
                <h2>Other Factors to Consider</h2>
                <ul>
                  <li>Energy efficiency: Newer roofing systems are more energy-efficient</li>
                  <li>Home value: A new roof can increase resale value</li>
                  <li>Peace of mind: A complete replacement eliminates worries about future problems</li>
                  <li>Opportunity to upgrade: Chance to switch to more durable or attractive materials</li>
                </ul>
                <p>The best approach is to have a professional roofing contractor perform a thorough inspection. At Spencer Roofing Solutions, we provide honest assessments to help you make the most cost-effective decision for your specific situation.</p>`,
        imageUrl: "https://picsum.photos/600/400?random=102",
        publishedAt: new Date("2023-04-10T09:15:00Z"),
        tags: ["roof repair", "roof replacement", "roofing costs"]
      },
      {
        title: "Understanding Your Insurance Coverage for Roof Damage",
        slug: "understanding-insurance-coverage-roof-damage",
        excerpt: "Navigating insurance claims for roof damage can be confusing. Learn what's typically covered, what's not, and how to maximize your claim.",
        content: `<p>When your roof suffers damage from a storm or other covered peril, understanding your insurance policy can make the difference between a smooth claim process and a frustrating one.</p>
                <h2>What's Typically Covered</h2>
                <p>Most homeowners insurance policies cover roof damage caused by:</p>
                <ul>
                  <li>Hail</li>
                  <li>Wind</li>
                  <li>Falling objects (like tree limbs)</li>
                  <li>Fire</li>
                  <li>Vandalism</li>
                  <li>Weight of ice, snow, or sleet</li>
                </ul>
                <h2>What's Usually Not Covered</h2>
                <ul>
                  <li>Normal wear and tear</li>
                  <li>Damage due to lack of maintenance</li>
                  <li>Cosmetic damage that doesn't affect functionality</li>
                  <li>Damage from floods or earthquakes (requires separate policies)</li>
                  <li>Pre-existing damage</li>
                </ul>
                <h2>Understanding Policy Terms</h2>
                <h3>Actual Cash Value (ACV) vs. Replacement Cost Value (RCV)</h3>
                <p>This is a critical distinction in your policy:</p>
                <ul>
                  <li><strong>ACV:</strong> Pays the depreciated value of your roof at the time of damage</li>
                  <li><strong>RCV:</strong> Pays the full cost to replace your roof with the same kind and quality</li>
                </ul>
                <p>RCV policies typically cost more but provide much better coverage, especially for older roofs.</p>
                <h2>The Claim Process</h2>
                <ol>
                  <li>Document damage thoroughly with photos and notes</li>
                  <li>Report the claim promptly to your insurance company</li>
                  <li>Have a professional roofing contractor inspect the damage</li>
                  <li>Meet with the insurance adjuster (having your contractor present is advisable)</li>
                  <li>Review the settlement offer carefully</li>
                  <li>Appeal if necessary</li>
                </ol>
                <h2>How We Can Help</h2>
                <p>As experienced insurance claim specialists, Spencer Roofing Solutions can:</p>
                <ul>
                  <li>Provide a thorough damage assessment</li>
                  <li>Document all damage properly for your claim</li>
                  <li>Meet with your insurance adjuster to ensure all damage is recognized</li>
                  <li>Review your settlement to ensure it's fair and complete</li>
                  <li>Handle the entire repair or replacement process</li>
                </ul>
                <p>Remember, having a knowledgeable roofing professional on your side can significantly improve the outcome of your insurance claim. Don't hesitate to contact us before filing your claim.</p>`,
        imageUrl: "https://picsum.photos/600/400?random=103",
        publishedAt: new Date("2023-03-22T11:45:00Z"),
        tags: ["insurance claims", "roof damage", "storm damage"]
      },
      {
        title: "Seasonal Roof Maintenance Tips for Denver Homeowners",
        slug: "seasonal-roof-maintenance-tips-denver",
        excerpt: "Learn how to protect your roof through Denver's diverse seasons with these essential maintenance tips for spring, summer, fall, and winter.",
        content: `<p>Denver's diverse climate presents unique challenges for your roof throughout the year. Following these seasonal maintenance tips can help extend your roof's lifespan and prevent costly repairs.</p>
                <h2>Spring Maintenance (March-May)</h2>
                <p>After winter's harsh conditions:</p>
                <ul>
                  <li>Clear debris (leaves, branches, etc.) from roof and gutters</li>
                  <li>Inspect for winter damage - look for missing, cracked, or curled shingles</li>
                  <li>Check flashing around chimneys, vents, and skylights</li>
                  <li>Look for signs of winter water damage in attic and ceiling</li>
                  <li>Trim overhanging branches that could damage your roof</li>
                </ul>
                <h2>Summer Maintenance (June-August)</h2>
                <p>Preparing for storm season:</p>
                <ul>
                  <li>Inspect roof for hail damage after storms</li>
                  <li>Check attic ventilation - proper airflow prevents heat buildup that can damage shingles</li>
                  <li>Look for signs of pest infestation</li>
                  <li>Clean gutters after heavy storms</li>
                  <li>Schedule professional inspection before hail season peaks</li>
                </ul>
                <h2>Fall Maintenance (September-November)</h2>
                <p>Preparing for winter:</p>
                <ul>
                  <li>Clear all leaves and debris from roof and gutters</li>
                  <li>Check for and seal any entry points for small animals seeking winter shelter</li>
                  <li>Inspect and repair any loose or damaged shingles</li>
                  <li>Ensure all drainage systems are functioning properly</li>
                  <li>Check attic insulation to prevent ice dams</li>
                </ul>
                <h2>Winter Maintenance (December-February)</h2>
                <p>During Colorado's snowiest months:</p>
                <ul>
                  <li>Safely remove excess snow after heavy snowfalls (using a roof rake from the ground)</li>
                  <li>Look for ice dam formation along eaves</li>
                  <li>Monitor for icicles, which can indicate poor insulation</li>
                  <li>Check for interior signs of leaks after snow melts</li>
                  <li>Ensure attic is properly ventilated</li>
                </ul>
                <h2>Year-Round Tips</h2>
                <ul>
                  <li>Inspect roof after any major storm event</li>
                  <li>Keep trees trimmed away from your roof</li>
                  <li>Address small issues before they become major problems</li>
                  <li>Schedule professional inspections twice a year (spring and fall)</li>
                </ul>
                <p>Remember, safety first! Many roof maintenance tasks can be done from the ground using binoculars. For tasks requiring roof access, consider hiring a professional. At Spencer Roofing Solutions, we offer maintenance programs designed specifically for Denver's climate to keep your roof in optimal condition year-round.</p>`,
        imageUrl: "https://picsum.photos/600/400?random=104",
        publishedAt: new Date("2023-02-17T10:00:00Z"),
        tags: ["roof maintenance", "seasonal tips", "denver weather"]
      }
    ];

    defaultBlogPosts.forEach(post => {
      const id = this.currentIds.blogPosts++;
      this.blogPosts.set(id, {
        id,
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt,
        content: post.content,
        imageUrl: post.imageUrl,
        author: "Spencer Roofing Solutions",
        publishedAt: post.publishedAt,
        tags: post.tags
      });
    });

    // Add portfolio projects
    const defaultPortfolioProjects: InsertPortfolioProject[] = [
      {
        title: "Asphalt Shingle Roof Replacement",
        location: "Highlands Ranch, CO",
        description: "Complete replacement of storm-damaged roof with architectural shingles and upgraded ventilation system.",
        category: "residential",
        imageUrl: "/images/woodshakebuild.jpg",
        beforeImageUrl: "/images/barrackbuildfinished.jpg",
        afterImageUrl: "/images/woodshakebuild.jpg",
        completionDate: new Date("2023-05-15"),
        testimonial: "Spencer and his team did an excellent job on our roof replacement. The work was completed on time and on budget. The new architectural shingles look fantastic and have already survived a hailstorm with no issues!",
        client: "Johnson Family"
      },
      {
        title: "TPO Commercial Roof Installation",
        location: "Denver, CO",
        description: "Installation of 20,000 sq. ft. TPO roofing system for a local business complex with improved drainage.",
        category: "commercial",
        imageUrl: "/images/buildfinishedpicrobryan.jpg",
        beforeImageUrl: "/images/colburnbuild.jpg",
        afterImageUrl: "/images/buildfinishedpicrobryan.jpg",
        completionDate: new Date("2023-04-22"),
        testimonial: "Working with Spencer on our commercial property's roof replacement was a seamless experience. His expertise in TPO systems was evident, and the improved drainage design has eliminated the ponding issues we had with our previous roof.",
        client: "Denver Business Complex"
      },
      {
        title: "Hail Damage Insurance Claim",
        location: "Aurora, CO",
        description: "Successfully processed insurance claim and replaced severely hail-damaged roof and gutters.",
        category: "insurance",
        imageUrl: "/images/haildamagepic.jpg",
        beforeImageUrl: "/images/haildamagepic.jpg",
        afterImageUrl: "/images/goldsteinbuild.jpg",
        completionDate: new Date("2023-06-10"),
        testimonial: "After a major hailstorm damaged our roof, Spencer guided us through the entire insurance claim process. His documentation and expertise convinced our insurance company to approve a complete replacement instead of just repairs. We couldn't be happier with the results!",
        client: "Thompson Residence"
      }
    ];

    defaultPortfolioProjects.forEach(project => {
      const id = this.currentIds.portfolioProjects++;
      this.portfolioProjects.set(id, {
        ...project,
        id
      });
    });

    // Add testimonials
    const defaultTestimonials: InsertTestimonial[] = [
      {
        content: "Spencer was excellent throughout our entire insurance claim process. After a major hailstorm, he helped us document everything, dealt with our insurance adjuster, and made sure we got a beautiful new roof. Highly recommend!",
        author: "Robert Johnson",
        location: "Centennial, CO",
        rating: 5,
        projectType: "Insurance Claim/Roof Replacement",
        imageUrl: undefined
      },
      {
        content: "Professional, responsive and extremely knowledgeable. Our commercial property needed a complete roof replacement, and Spencer managed the entire project with minimal disruption to our business. Outstanding service!",
        author: "Sarah Williams",
        location: "Denver, CO",
        rating: 5,
        projectType: "Commercial Roof Replacement",
        imageUrl: undefined
      },
      {
        content: "We had a leak during a major storm and Spencer was out to our house within hours. The repair was done quickly and professionally. He also helped us understand what maintenance we needed to prevent future issues.",
        author: "Michael & Lisa Thompson",
        location: "Lakewood, CO",
        rating: 4.5,
        projectType: "Emergency Repair",
        imageUrl: undefined
      },
      {
        content: "The level of expertise and attention to detail was impressive. Spencer helped us select the perfect roofing material for our home and oversaw the installation process from start to finish. Very satisfied with the results!",
        author: "David Martinez",
        location: "Aurora, CO",
        rating: 5,
        projectType: "Residential Roof Replacement",
        imageUrl: undefined
      }
    ];

    defaultTestimonials.forEach(testimonial => {
      const id = this.currentIds.testimonials++;
      this.testimonials.set(id, {
        ...testimonial,
        id,
        createdAt: new Date(),
        isApproved: true
      });
    });
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentIds.users++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Contact submission methods
  async createContactSubmission(submission: InsertContact): Promise<ContactSubmission> {
    const id = this.currentIds.contactSubmissions++;
    const currentTime = new Date();
    
    // Set consent timestamp if either consent is given
    const consentTimestamp = (submission.emailConsent || submission.smsConsent) ? currentTime : null;
    
    const newSubmission: ContactSubmission = { 
      ...submission, 
      id,
      consentTimestamp,
      createdAt: currentTime,
      status: "new"
    };
    this.contactSubmissions.set(id, newSubmission);
    return newSubmission;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactSubmissions.values())
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async getContactSubmission(id: number): Promise<ContactSubmission | undefined> {
    return this.contactSubmissions.get(id);
  }

  async updateContactSubmissionStatus(id: number, status: string): Promise<ContactSubmission | undefined> {
    const submission = this.contactSubmissions.get(id);
    if (!submission) return undefined;

    const updatedSubmission = { ...submission, status };
    this.contactSubmissions.set(id, updatedSubmission);
    return updatedSubmission;
  }

  // Blog post methods
  async createBlogPost(post: InsertBlogPost): Promise<BlogPost> {
    const id = this.currentIds.blogPosts++;
    const newPost: BlogPost = { ...post, id };
    this.blogPosts.set(id, newPost);
    return newPost;
  }

  async getBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values())
      .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
  }

  async getBlogPostById(id: number): Promise<BlogPost | undefined> {
    return this.blogPosts.get(id);
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    return Array.from(this.blogPosts.values()).find(post => post.slug === slug);
  }

  async updateBlogPost(id: number, post: Partial<InsertBlogPost>): Promise<BlogPost | undefined> {
    const existingPost = this.blogPosts.get(id);
    if (!existingPost) return undefined;

    const updatedPost = { ...existingPost, ...post };
    this.blogPosts.set(id, updatedPost);
    return updatedPost;
  }

  async deleteBlogPost(id: number): Promise<boolean> {
    return this.blogPosts.delete(id);
  }

  // Portfolio project methods
  async createPortfolioProject(project: InsertPortfolioProject): Promise<PortfolioProject> {
    const id = this.currentIds.portfolioProjects++;
    const newProject: PortfolioProject = { ...project, id };
    this.portfolioProjects.set(id, newProject);
    return newProject;
  }

  async getPortfolioProjects(): Promise<PortfolioProject[]> {
    return Array.from(this.portfolioProjects.values());
  }

  async getPortfolioProjectById(id: number): Promise<PortfolioProject | undefined> {
    return this.portfolioProjects.get(id);
  }

  async getPortfolioProjectsByCategory(category: string): Promise<PortfolioProject[]> {
    return Array.from(this.portfolioProjects.values())
      .filter(project => project.category === category);
  }

  async updatePortfolioProject(id: number, project: Partial<InsertPortfolioProject>): Promise<PortfolioProject | undefined> {
    const existingProject = this.portfolioProjects.get(id);
    if (!existingProject) return undefined;

    const updatedProject = { ...existingProject, ...project };
    this.portfolioProjects.set(id, updatedProject);
    return updatedProject;
  }

  async deletePortfolioProject(id: number): Promise<boolean> {
    return this.portfolioProjects.delete(id);
  }

  // Testimonial methods
  async createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial> {
    const id = this.currentIds.testimonials++;
    const newTestimonial: Testimonial = { 
      ...testimonial, 
      id,
      createdAt: new Date(),
      isApproved: false
    };
    this.testimonials.set(id, newTestimonial);
    return newTestimonial;
  }

  async getTestimonials(approvedOnly = true): Promise<Testimonial[]> {
    let testimonials = Array.from(this.testimonials.values());

    if (approvedOnly) {
      testimonials = testimonials.filter(t => t.isApproved);
    }

    return testimonials.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async getTestimonialById(id: number): Promise<Testimonial | undefined> {
    return this.testimonials.get(id);
  }

  async updateTestimonial(id: number, testimonial: Partial<InsertTestimonial>): Promise<Testimonial | undefined> {
    const existingTestimonial = this.testimonials.get(id);
    if (!existingTestimonial) return undefined;

    const updatedTestimonial = { ...existingTestimonial, ...testimonial };
    this.testimonials.set(id, updatedTestimonial);
    return updatedTestimonial;
  }

  async deleteTestimonial(id: number): Promise<boolean> {
    return this.testimonials.delete(id);
  }
}

export const storage = new MemStorage();