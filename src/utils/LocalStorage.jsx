const employees = [
  {
    "id": 1,
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Develop Landing Page",
        "taskDescription": "Design and develop the main landing page of the website.",
        "category": "Development",
        "taskDate": "2024-10-01"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Fix Bug in Checkout",
        "taskDescription": "Identify and fix the issue in the checkout process.",
        "category": "Development",
        "taskDate": "2024-10-05"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Design New Logo",
        "taskDescription": "Create a new logo for the website.",
        "category": "Design",
        "taskDate": "2024-09-28"
      }
    ]
  },
  {
    "id": 2,
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Write Blog Post",
        "taskDescription": "Write a detailed blog post about the latest product update.",
        "category": "Content",
        "taskDate": "2024-10-02"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Create Product Demo Video",
        "taskDescription": "Record a video demonstrating the product's key features.",
        "category": "Marketing",
        "taskDate": "2024-09-29"
      }
    ]
  },
  {
    "id": 3,
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Database Optimization",
        "taskDescription": "Optimize database queries for better performance.",
        "category": "Development",
        "taskDate": "2024-10-03"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Conduct Security Audit",
        "taskDescription": "Audit the system for any security vulnerabilities.",
        "category": "Security",
        "taskDate": "2024-09-25"
      }
    ]
  },
  {
    "id": 4,
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Update User Guide",
        "taskDescription": "Update the user guide for the latest software version.",
        "category": "Content",
        "taskDate": "2024-09-27"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Test Mobile App",
        "taskDescription": "Perform testing on the new mobile app features.",
        "category": "Testing",
        "taskDate": "2024-10-04"
      }
    ]
  },
  {
    "id": 5,
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Plan Marketing Campaign",
        "taskDescription": "Create a plan for the upcoming product launch marketing campaign.",
        "category": "Marketing",
        "taskDate": "2024-10-07"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Design Social Media Ads",
        "taskDescription": "Design ads for social media platforms.",
        "category": "Design",
        "taskDate": "2024-09-30"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Analyze Customer Feedback",
        "taskDescription": "Analyze the customer feedback and provide a report.",
        "category": "Research",
        "taskDate": "2024-10-01"
      }
    ]
  }
];

const admin = [
  {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }
];


export const  setLocalStorage = ()=>{
       localStorage.setItem('employees' ,JSON.stringify(employees))
       localStorage.setItem('admin' ,JSON.stringify(admin)) 
}

export const  getLocalStorage = ()=>{
       const data = localStorage.getItem('employees')
      console.log(JSON.parse(data)) 
}


