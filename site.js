const videoSurveillance = {
    subject: "Video Surveillance",
    description: "A tool ensuring public safety, monitoring areas, and aiding advanced technological processes.",
    
    technologicalAdvancements: {
        aiCapabilities: ["Object Recognition", "Anomaly Detection", "3D Reconstruction"],
        integrationWithOtherTech: ["3D Printing Monitoring", "Structural Analysis", "Real-time Feedback"],
        upcomingTech: ["Drone Surveillance", "Biometric Analysis", "IoT Integration"]
    },
    
    applications: {
        publicSafety: ["Traffic Monitoring", "Crime Deterrence", "Public Behavior Analysis"],
        business: ["Consumer Behavior Analysis", "Store Layout Optimization", "Employee Monitoring"],
        techProcesses: {
            monitoring3DPrinting: "Analyze real-time 3D printing processes to detect defects and errors.",
            structuralWeakSpotDetection: "Detect and highlight weak spots or mistakes in structures or machinery.",
            reconstruct3DModel: "Capture and recreate a detailed 3D model of observed objects or scenes."
        },
        healthcare: ["Patient Monitoring", "Equipment Tracking", "Safety Assurance"]
    },
    
    sentiments: {
        publicOpinion: {
            positive: ["Enhanced Security", "Crime Reduction"],
            negative: ["Privacy Concerns", "Data Misuse"]
        },
        regulatoryFrameworks: ["Data Protection Laws", "Surveillance Guidelines", "International Agreements"]
    },
    
    futureImplications: {
        globalTrends: ["Increased Use in Smart Cities", "Remote Surveillance", "Integration in Autonomous Vehicles"],
        potentialRisks: ["Misuse by Authorities", "Hacking", "Over-reliance"]
    },
    
    totalCameraCount: 500000,
    activeCameras: 450000,
    isPrivacyEnsured: false,
    recognizedObjects: [],

    logObservation: function(object) {
        if(this.recognizedObjects.includes(object)) {
            console.log(`${object} is already recognized.`);
        } else {
            this.recognizedObjects.push(object);
            console.log(`New object recognized: ${object}.`);
        }
    },

    togglePrivacyProtection: function() {
        this.isPrivacyEnsured = !this.isPrivacyEnsured;
        const status = this.isPrivacyEnsured ? "ensured" : "not ensured";
        console.log(`Privacy is now ${status}.`);
    },

    addNewCamera: function() {
        this.totalCameraCount++;
        console.log(`Total cameras: ${this.totalCameraCount}`);
    },

    removeCamera: function() {
        if (this.totalCameraCount > 0) {
            this.totalCameraCount--;
            console.log(`Total cameras: ${this.totalCameraCount}`);
        } else {
            console.log("No cameras to remove.");
        }
    },



history: {
    inception: "1942",
    firstUse: "Used in World War II to observe the launch of rockets.",
    developmentStages: {
        "1960s": "Introduction of CCTV systems for public surveillance.",
        "1980s": "Integration with computer systems to enhance storage and retrieval.",
        "2000s": "Introduction of IP cameras and integration with internet for real-time monitoring.",
        "2010s": "Integration with AI and advanced analytics capabilities."
    }
},

aiFunctionality: {
    objectRecognition: {
        definition: "Ability to recognize and classify objects in real-time.",
        applications: ["Crowd Management", "Vehicle Monitoring", "Asset Protection"]
    },
    anomalyDetection: {
        definition: "Detect unusual patterns that do not conform to expected behavior.",
        applications: ["Intrusion Detection", "Unattended Object Detection", "Traffic Pattern Anomalies"]
    },
    facialRecognition: {
        definition: "Identify or verify a person from a digital image or video frame.",
        applications: ["Identity Verification", "Criminal Identification", "Access Control"]

    }
},

potentialFutureApplications: {
    environment: ["Monitoring of endangered species", "Deforestation alerts", "Oceanic studies"],
    spaceExploration: ["Monitoring of space stations", "Observation of other celestial bodies", "Aiding interstellar missions"],
    personalUse: ["Personal security drones", "Automated content creation", "Personal health monitoring"]
},

updateCameraStatus: function(status) {
    if(status === "active") {
        this.activeCameras++;
    } else if(status === "inactive" && this.activeCameras > 0) {
        this.activeCameras--;
    }
    console.log(`Active cameras: ${this.activeCameras}`);
}
};

// Have 10 properties at the top level:
// subject
// description
// technologicalAdvancements
// applications
// sentiments
// futureImplications
// totalCameraCount
// activeCameras
// isPrivacyEnsured
// recognizedObjects
// logObservation
// togglePrivacyProtection
// addNewCamera
// removeCamera
// Have 14 properties at the top level?
// Have at least 3 nested properties:
// technologicalAdvancements has nested properties such as aiCapabilities, integrationWithOtherTech, and upcomingTech.
// applications has nested properties like publicSafety, business, techProcesses, and healthcare.
// sentiments contains nested properties publicOpinion and regulatoryFrameworks.
//Satisfied this requirement with multiple nested properties.
// Have at least 2 functions:
// logObservation
// togglePrivacyProtection
// addNewCamera
// removeCamera
// Have 4 functions in total, so this requirement is covered.
// Incorporate all of the following data types:
// Number: totalCameraCount and activeCameras
// String: subject and description
// Boolean: isPrivacyEnsured
// Function: logObservation, togglePrivacyProtection, addNewCamera, removeCamera
// Object: The entire videoSurveillance is an object, and it also contains nested objects like technologicalAdvancements, applications, etc.
// Array: technologicalAdvancements.aiCapabilities, sentiments.publicOpinion.positive,






//     'subject': string
//     'description': string
    
//     'technologicalAdvancements': object
//         'aiCapabilities': array 
//         'integrationWithOtherTech': array 
//         'upcomingTech': array 
    
    
//     'applications': object
//         'publicSafety': array 
//         'business': array 
//         'techProcesses': objects
//             'monitoring3DPrinting': string
//             'structuralWeakSpotDetection': string
//             'reconstruct3DModel': string
         
//         'healthcare': array 
    
    
//     'sentiments':object
//         'publicOpinion': object
//             'positive': array 
//             'negative': array 
        
//         'regulatoryFrameworks': array 
    
    
//     'futureImplications': object
//         'globalTrends': array
//         'potentialRisks': array
    
    
//     'totalCameraCount': number
//     'activeCameras': number
//     'isPrivacyEnsured': boolean
//     'recognizedObjects': array 

//     'logObservation': function
       

//     'togglePrivacyProtection': function
    

//     'addNewCamera': function
    

//     'removeCamera': function
    
// 'history': object
//     'inception': string
//     'firstUse': string
//     'developmentStages': object
//         "1960s": string
//         "1980s": string
//         "2000s": string
//         "2010s": string
// 'aiFunctionality': object
//     'objectRecognition': object
//        'definition': string
//        'applications': array 
//     'anomalyDetection': object
//        'definition': string
//        'applications': array 
//     'facialRecognition': object
//        'definition': string
//        'applications': array 
// 'potentialFutureApplications': object
//     'environment': array 
//     'spaceExploration': array 
//    ' personalUse': array 
// 'updateCameraStatus': function
