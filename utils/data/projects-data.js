import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Customer Churn Analysis',
        description: "Preprocessed data using scikit-learn in Python for feature normalization and one-hot encoding. Visualized model performance with confusion matrices, employing various ML algorithms to achieve 96.5% accuracy.",
        tools: ['Python', 'Scikit-learn', 'Matplotlib', 'Numpy', 'Pandas'],
        role : '',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Farm Land Area Calculator',
        description: 'Devised an Android app using Flutter to calculate farm land area and perimeter through perimeter walks and metrics conversion. Integrated Google Maps for real-time path tracking, resulting in over 1000 active users.',
        tools: ['Flutter', "Google Maps"],
        role : '',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Hydroponics',
        description: 'Built an automated Arduino-driven hydroponics system, facilitating daily fodder production for over 20 cattle, using corn and wheat; reduced feed costs by 15%, and enhanced milk quality.',
        tools: ['Arduino Uno', 'Breadboard', 'Relay', 'Arduino Software'],
        role : '',
        code: '',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Internet Relay Chat',
        description: "Built Python-based IRC client-server app with advanced socket programming and TCP/IP. Implemented multithreaded server architecture, boosting message delivery by 30% for real-time chat.",
        tools: ['Python', 'Socket' ],
        role : '',
        code: '',
        demo: '',
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