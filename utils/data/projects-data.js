import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    
    {
        id: 1,
        name: 'News Summarizer',
        description: 'Fine-tuned a T5 Large Language Model (LLM) for news summarization with PyTorch and Hugging Face transformers, achieving an average ROUGE score of 14.82% in the final epoch.Reduced training loss from 1.5949 to 1.4343 and validation loss to 1.3523 by implementing a summarization pipeline with the fine-tuned T5 model, ensuring high-quality summary generation.',
        tools: ['Pytorch', 'Hugging Face', 'Python', 'Scikit-Learn', 'Pandas', 'Numpy'],
        role : '',
        code: '',
        demo: 'https://huggingface.co/datasets/rajkarne/news-summarization',
        image: realEstate,
    },
    {
        id: 2,
        name: 'AutoVisionSolver',
        description: 'Architected a Flask web application using MVC architecture that leverages Cloud Vision and Generative AI to solve multilingual image-based math problems, streamlining academic research and education processes.Implemented Docker containers to streamline deployment process, ensuring consistency across diverse environments.',
        tools: ['Python', 'Flask', 'MVC', 'HTML', 'Javascript'],
        role : '',
        code: '',
        demo: 'https://github.com/PiRaj1404/AutoVisionSolver',
        image: travel,
    },
    {
        id: 3,
        name: 'Customer Churn Analysis',
        description: "Preprocessed data using scikit-learn in Python for feature normalization and one-hot encoding. Visualized model performance with confusion matrices, employing various ML algorithms to achieve 96.5% accuracy.",
        tools: ['Python', 'Scikit-learn', 'Matplotlib', 'Numpy', 'Pandas'],
        role : '',
        code: '',
        demo: 'https://github.com/PiRaj1404/Customer-churn-Analysis',
        image: crefin,
    },
    {
        id: 4,
        name: 'Internet Relay Chat',
        description: "Developed a Python-based Internet Relay Chat (IRC) client-server application with advanced socket programming and TCP/IP protocols, featuring a distributed, multithreaded server architecture that enhanced message delivery speeds, thus improving real-time chat experiences.",
        tools: ['Python', 'Socket' ],
        role : '',
        code: '',
        demo: 'https://github.com/PiRaj1404/IRC',
        image: ayla,
        
    }
    // {
    //     id: 5,
    //     name: 'Memories',
    //     description: 'Created a MERN stack web app for secure storage of cherished memories. Designed responsive UI, user authentication, and MongoDB integration for seamless functionality and enhanced user experience.',
    //     tools: ['React', 'Bootstrap', 'Node', 'MongoDb', 'JWT'],
    //     role : '',
    //     code: '',
    //     demo: '',
    //     image: realEstate,
    // },
    // {
    //     id: 6,
    //     name: 'Hand Gesture Recognition System',
    //     description: "Used the MediaPipe and OpenCV Python libraries for real-time detection of hands and fingertips, and for performing mouse functions using hand gestures. Published a research paper in IJNGC journal.",
    //     tools: ['Python', 'OpenCV', 'MediaPipe' ],
    //     role : '',
    //     code: '',
    //     demo: '',
    //     image: ayla,
        
    // }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
