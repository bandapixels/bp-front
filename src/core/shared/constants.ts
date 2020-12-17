export default {
  schema: "https://",
  host: process.env.APP_HOSTNAME || "bp.foxyloxy.me",
  helpers: {
    form: "/contact",
    blog: "/postList"
  },
  projects: [
    {
      title: "AppNavi - Web App and Browser Extension",
      description: `
        <p>AppNavi was created as a new approach to employee training and increasing work efficiency; thus it gained popularity among the clients. However,  confusing user flows and outdated design became a real obstacle in attracting new clients.</p> 
        <p>Our task was to develop such convenient and intuitive UX that no questions would arise of how to use it. The UI part, on the other hand, was supposed to ensure an easy comprehension when integrated into absolutely any software.</p>
      `,
      footerTitle: "Results",
      footerDescription: `
        AppNavi got optimized user scenarios, modernized branding and marketing materials, which increased the number of clients and conversion %. 
      `,
      video: "/videos/AppNavi_animate.mp4",
      url: "/appnavi",
      orientation: "landscape",
      position: "right",
      image: "/images/projectsMain/appnavi.jpg"
    },
    {
      title: "SunUP - Solar Panel Interactive Web Application",
      description: `
        <p>SunUP is a B2B solution to visualize roof solar panels in 3D. The main design goal was to simplyfy the user flow to creating the layout of their future rooftop solar panels.</p>
        <p>Another crucial point was to make users intuitively understand what instrument to use while creating the solar panel layout.</p> 
      `,
      footerTitle: "Results",
      footerDescription: `
        Following the modern trends and successful experince of similar web apps, we decided to display the user flow as Wizard Design and create a simple instrument layout for users to easily work with the app.  
      `,
      url: "/sunup",
      orientation: "landscape",
      position: "right",
      image: "/images/projectsMain/sunup.jpg"
    },
    {
      title: "Shed - a Service Where you Can Rent Everything You Need",
      description: `
        <p>Shed was intended to be a complex service with 3 user types, possibility of remote quality control and clear product verification scenario. The main task for us was to create a service with a quick product search, high-quality sorting and data ranking.</p>
        <p>The second task was to minimize the number of steps to the end point. In a nutshell, we needed to put all the functionality into an easy-to-use infrastructure.</p>
      `,
      footerTitle: "Results",
      footerDescription: `
        A full-fledged product with a convenient infrastructure was the result. The color scheme and logo provided by the client harmoniously fit into the product design and were approved as the brand colors of the company.
      `,
      video: "/videos/shed.mp4",
      url: "/shed",
      orientation: "landscape",
      position: "right",
      image: "/images/projectsMain/shed.jpg"
    },
    {
      title: "DCR - Business Digitalization Platform ",
      description: `
        <p>Despite the popularity of the platform and high-level demand for its services, the company began to receive complaints regarding service convenience. Due to the inconvenient and difficult UX design, as well as  outdated and chaotic UI design, the popularity of the service began to decline significantly.</p> 
        <p>The goal was to make the platform modern and intuitive, not changing it too much for the sake if old customers' convenience.</p>
      `,
      footerTitle: "Results",
      footerDescription: `
        1 - Modernized interaction on the platform; 2 - Convenient user journey; 3 - Updated company image;
        4 - Increase in the number of compamy clients; 5 - Increase in the company budget
      `,
      video: "/videos/dcr.mp4",
      url: "/dcr",
      orientation: "landscape",
      position: "left",
      image: "/images/projectsMain/dcr.jpg"
    },
    {
      title: "CaseKeepers - Service for Lawyers & Their Clients",
      description: `
        <p>The goal was to provide a convenient way for professionals and their clients to communicate within the system.</p>
        <p>Technically, we needed to provide a convenient data structure leveraged by Firebase capabilities in order to allow creating, storing, viewing messages within the application.</p> 
      `,
      footerTitle: "Results",
      footerDescription: `
        Eventually, more and more professionals, like attorneys and therapists, started using the app because of its improved, clear and convenient design for desktop and mobile interfaces.
      `,
      url: "/casekeepers",
      orientation: "landscape",
      position: "left",
      image: "/images/projectsMain/casekeepers.jpg"
    }
  ]
};
