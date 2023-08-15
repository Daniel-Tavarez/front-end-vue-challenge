<template>
  <div class="home-view">
    <section class="searcher-wrapper">
      <SearchComponent />
    </section>
    <section class="blog-posts-wrapper">
      <div class="blog-post-content" v-for="(post, index) in jsonMock" :key="index">
        <PostCardComponent :post="post"></PostCardComponent>
      </div>
    </section>
  </div>
</template>

<script setup>
import PostCardComponent from "@/components/post-card/PostCardComponent.vue";
import SearchComponent from "@/components/search/SearchComponent.vue";
const jsonMock = [
  {
    "title": "Should I work remotely or will it put a strain on my long-term career?",
    "subTitle": "This is a sample post description.",
    "body": "body",
    "user": {
      "picture": "https://example.com/user/profile.jpg",
      "fullName": "John Doe",
      "email": "user@gmail.com",
      "password": ''
    },
    "datePosted": "2023-08-01",
    "image": "https://s3-alpha-sig.figma.com/img/7b33/9903/fb0c699ae2b9218dae2ae9b3254478a9?Expires=1693180800&Signature=kBhndUKGr1RojYeqguTU5~YwlWocxrEVR5MEIre-vMu9ds~gz-JeQrPkJ8U1BpGMJtcTI4P4UUy2xaru6sEKUdyqoqK1StXq8U6rfsWr9zDCuC-8iCJ8xbs7tPI9MIda8NgsowXjy-1-p3FX7V4HvNIKEDk~q5tZW2r~vsoVk4SzSwO5liFf9vtJkS6dwCKvef9DUaXEdf181Q0A76lgDn0nEophP-LRf6uYqbRvMktyVN8y69iimVNyJFaN~bigUnrml74ScM0HGw60cjvRl2YDByp0Kya0V5bsW1RL69Y3Y6KpMj2~kPgY7Q8XfmohngKD4YMM0l4yzLLbju244g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    "imageCaption": "This is a caption on this photo for reference",
    "monthlyPayment": 49,
    "favorite": true,
    "type": 1
  },
  {
    "title": "The Benefits of Remote Work",
    "subTitle": "Exploring the advantages of working from home.",
    "body": "body",
    "user": {
      "picture": "https://example.com/user/profile.jpg",
      "fullName": "John Doe",
      "email": "user@gmail.com",
      "password": ''
    },
    "datePosted": "2023-07-15",
    "image": "https://example.com/images/remote-work.jpg",
    "imageCaption": "Working remotely can provide flexibility.",
    "monthlyPayment": 49,
    "favorite": false,
    "type": 2
  },
  {
    "title": "Top 5 Strategies for Remote Team Collaboration",
    "subTitle": "Effective ways to collaborate while working remotely.",
    "body": "body",
    "user": {
      "picture": "https://example.com/user/profile.jpg",
      "fullName": "John Doe",
      "email": "user@gmail.com",
      "password": ''
    },
    "datePosted": "2023-07-10",
    "image": "https://example.com/images/team-collaboration.jpg",
    "imageCaption": "Collaboration tools are crucial for remote teams.",
    "monthlyPayment": 49,
    "favorite": true,
    "type": 3
  },
  {
    "title": "Navigating Remote Work Challenges",
    "subTitle": "Overcoming common challenges in remote work environments.",
    "body": "body",
    "user": {
      "picture": "https://example.com/user/profile.jpg",
      "fullName": "John Doe",
      "email": "user@gmail.com",
      "password": ''
    },
    "datePosted": "2023-08-05",
    "image": "https://example.com/images/remote-work-challenges.jpg",
    "imageCaption": "Remote work comes with its own set of challenges.",
    "monthlyPayment": 49,
    "favorite": false,
    "type": 1
  },
  {
    "title": "Remote Work vs. Traditional Office: Pros and Cons",
    "subTitle": "Comparing the advantages and disadvantages of remote work and office work.",
    "body": "body",
    "user": {
      "picture": "https://example.com/user/profile.jpg",
      "fullName": "John Doe",
      "email": "user@gmail.com",
      "password": ''
    },
    "datePosted": "2023-08-10",
    "image": "https://example.com/images/remote-vs-office.jpg",
    "imageCaption": "Both remote work and office work have their merits.",
    "monthlyPayment": 49,
    "favorite": true,
    "type": 2
  },
  {
    "title": "Maximizing Productivity in a Remote Work Setup",
    "subTitle": "Tips for staying productive while working remotely.",
    "body": "body",
    "user": {
      "picture": "https://example.com/user/profile.jpg",
      "fullName": "John Doe",
      "email": "user@gmail.com",
      "password": ''
    },
    "datePosted": "2023-07-25",
    "image": "https://example.com/images/remote-productivity.jpg",
    "imageCaption": "Remote workers need effective productivity strategies.",
    "monthlyPayment": 49,
    "favorite": false,
    "type": 3
  },
  {
    "title": "Remote Work: A Lifestyle Change",
    "subTitle": "Exploring the lifestyle changes that come with remote work.",
    "body": "body",
    "user": {
      "picture": "https://example.com/user/profile.jpg",
      "fullName": "John Doe",
      "email": "user@gmail.com",
      "password": ''
    },
    "datePosted": "2023-08-02",
    "image": "https://example.com/images/remote-lifestyle.jpg",
    "imageCaption": "Remote work impacts various aspects of life.",
    "monthlyPayment": 49,
    "favorite": true,
    "type": 1
  },
  {
    "title": "Managing Remote Teams Effectively",
    "subTitle": "Best practices for leading remote teams successfully.",
    "body": "body",
    "user": {
      "picture": "https://example.com/user/profile.jpg",
      "fullName": "John Doe",
      "email": "user@gmail.com",
      "password": ''
    },
    "datePosted": "2023-07-18",
    "image": "https://example.com/images/remote-team-management.jpg",
    "imageCaption": "Remote team management requires specialized skills.",
    "monthlyPayment": 49,
    "favorite": false,
    "type": 2
  },
  {
    "title": "Remote Work and Work-Life Balance",
    "subTitle": "Maintaining a healthy work-life balance in a remote work environment.",
    "body": "body",
    "user": {
      "picture": "https://example.com/user/profile.jpg",
      "fullName": "John Doe",
      "email": "user@gmail.com",
      "password": ''
    },
    "datePosted": "2023-08-08",
    "image": "https://example.com/images/work-life-balance.jpg",
    "imageCaption": "Remote workers need to establish boundaries.",
    "monthlyPayment": 49,
    "favorite": true,
    "type": 3
  },
  {
    "title": "The Future of Work: Remote Trends",
    "subTitle": "Exploring emerging trends in the remote work landscape.",
    "body": "body",
    "user": {
      "picture": "https://example.com/user/profile.jpg",
      "fullName": "John Doe",
      "email": "user@gmail.com",
      "password": ''
    },
    "datePosted": "2023-07-28",
    "image": "https://example.com/images/remote-work-trends.jpg",
    "imageCaption": "The future of work is shaped by remote work trends.",
    "monthlyPayment": 49,
    "favorite": false,
    "type": 1
  }
];
</script>
