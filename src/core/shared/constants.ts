export default {
  schema: "https://",
  host: process.env.APP_HOSTNAME || "bandapixels.com",
  helpers: {
    form: "/contact",
    blog: "/postList"
  },
  projects: [
    {
      name: "AppNavi",
      description: `
        TECOM Conf is China's first Tech and Entrepreneur Communities
        conference.
        
        TECOM Conf brings the most dynamic, engaging and vibrant
        Communities, Startups,
      `,
      problem: `
        A problem is considered to be major when a reasonable consumer
        would not have bought the product if they had known the problem
        beforehand – for example, a toaster breaks down before a
        reasonable consumer would expect it to.
        
        If the product has some other problem that is not covered by
        ‘major problem’ above, it can be considered to be a minor problem.
        For example, it does not do what it is normally supposed to do but
        can be fixed easily and within a reasonable time.
      `,
      video: "/videos/AppNavi_animate.mp4",
      url: "/appnavi",
      orientation: "landscape",
      position: "right"
    },
    {
      name: "SunUp",
      description: `
        TECOM-2 Conf is China's first Tech and Entrepreneur Communities
        conference.

        TECOM-2 Conf brings the most dynamic, engaging and vibrant
        Communities, Startups,
      `,
      problem: `
        A problem is considered to be major when a reasonable consumer
        would not have bought the product if they had known the problem
        beforehand – for example, a toaster breaks down before a
        reasonable consumer would expect it to.
      `,
      video: "",
      url: "/sunup",
      orientation: "landscape",
      position: "right"
    },
    {
      name: "Shed",
      description: `
        TECOM-3 Conf is China's first Tech and Entrepreneur Communities
        conference.

        TECOM-3 Conf brings the most dynamic, engaging and vibrant
        Communities, Startups,
      `,
      problem: `
        A problem is considered to be major when a reasonable consumer
        would not have bought the product if they had known the problem
        beforehand – for example, a toaster breaks down before a
        reasonable consumer would expect it to.
      `,
      video: "/videos/shed.mp4",
      url: "/shed",
      orientation: "landscape",
      position: "right"
    },
    {
      name: "DCR",
      description: `
        TECOM-3 Conf is China's first Tech and Entrepreneur Communities
        conference.

        TECOM-3 Conf brings the most dynamic, engaging and vibrant
        Communities, Startups,
      `,
      problem: `
        A problem is considered to be major when a reasonable consumer
        would not have bought the product if they had known the problem
        beforehand – for example, a toaster breaks down before a
        reasonable consumer would expect it to.
      `,
      video: "/videos/dcr.mp4",
      url: "/dcr",
      orientation: "landscape",
      position: "left"
    },
    {
      name: "CaseKeepers",
      description: `
        TECOM-3 Conf is China's first Tech and Entrepreneur Communities
        conference.

        TECOM-3 Conf brings the most dynamic, engaging and vibrant
        Communities, Startups,
      `,
      problem: `
        A problem is considered to be major when a reasonable consumer
        would not have bought the product if they had known the problem
        beforehand – for example, a toaster breaks down before a
        reasonable consumer would expect it to.
      `,
      video: "",
      url: "/casekeepers",
      orientation: "landscape",
      position: "left"
    }
  ]
};
