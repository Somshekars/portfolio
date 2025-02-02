const Projects = {
    Details:{//adding in opposite-chronological order, so it's easy to add later    
        Template: {
            ID: "Template",
            Name: "",
            SmallDescription: "",
            LargeDescription: "",
            DownloadLink: "",
            EmbedVideoLinkID: "",
            NoOfProjectImages: 1
        },
        WorkInProgress: {
            ID: "WorkInProgress",
            Name: "Current Projects",
            SmallDescription: "iOS, Android, AR, VR",
            LargeDescription: "Have you heard my Under Construction joke?<br>It's not done yet",
            NoOfProjectImages: 1
        },
        TileVisualiser: {
            ID: "TileVisualiser",
            Name: "Tile Visualiser",
            SmallDescription: "Shaders, Occulus Go, Unity3D",
            LargeDescription: ' • Wrote Surface Shader from scratch in Cg/HLSL (Unity3D) for VR Occulus Go build<br> • Proposed most opptimised way to approach a problem keeping in mind the target platform<br> • Set-up Unity3D for most optimised yet best quality settings<br> • Helped to build realistic Tile Visualiser with dynamic tiles and patterns with different grout<br>',
            DownloadLink: "",
            EmbedVideoLinkID: "",
            NoOfProjectImages: 0
        },
        Store: {
            ID: "Store",
            Name: "Android/iOS",
            SmallDescription: "5+ Published Games",
            LargeDescription: "• 2D Infinite runner with jump and dash mechanics in Unity3D and C# for Android.<br>• Platforms are autogenerated with tweakable values of distance given to designers.<br>• Speed of the character increases with respect to time based on formula provided by the designers.<br>• Worked on implementation of Spline animation of character, UI, design.<br>",
            DownloadLink: "https://play.google.com/store/apps/details?id=dev.dsi.synthrider",
            EmbedVideoLinkID: "",
            NoOfProjectImages: 1
        },
        MathnMind: {
            ID: "MathnMind",
            Name: "Math n Mind",
            SmallDescription: "Kids Math Game",
            LargeDescription: 'Snake eats fruit in an enclosed shape and avoid obstacles. Fruits spawns at random position within the playground. There are two main parts of game, Custom levels and Procedural level. In Custom level, snake has to avoid obstacle in prebaked playground and where as in Procedural level, enclosed shape is a regular polygon with obstacles spawning at random position within playground.<br><br>This game is developed using Unity3D game engine. Game was initially developed to be played over android platform, but game’s simple swipe control allows the gameplay to function with arrow key of joystick controller or keyboard.<br><br>If player chooses Custom level, playground corresponding to level 1 is instantiated along with Snake head and two tails. After this a Fruit is instantiated at random position inside the playground and snake is assigned with random velocity in 4 planar directions (up, down, left, right). Each time Snake eats a fruit, another fruit is instantiated at random position inside playground and a tail is increased in Snake. Snake has to eat a predefined value of minimum number of fruits to eat to surpass any level. If snake eats equal to requirement, player has now option to jump to next level or continue playing this level. If player chooses to go next level, next playground is instantiated and cycle repeats till all Custom levels are completed, after which player wins the game.<br><br>If player chooses Procedural level, an equilateral triangle (minimum sided polygon) is generated along with Snake head and two tails. After this a Fruit is instantiated at random position inside polygon. Snake is assigned with random velocity in 4 planar directions (up, down, left, right). Each time Snake eats a Fruit, another Fruit and an Obstacle are instantiated at two different random position inside the polygon and a tail is increased in Snake. Snake has to eat a predefined value of minimum number of fruits to eat to surpass any level. If snake eats equal to requirement, player has now option to jump to next level or continue playing this level. If player chooses to go next level, polygon with +1 side is generated cycle repeats endlessly.<br><br><div class="text-center"><a target="_blank" href="https://github.com/Somshekars/snake3d" type="button" class="btn btn-primary">More Information</a></div>',
            DownloadLink: "",
            EmbedVideoLinkID: "5cddOo_0jsE",
            NoOfProjectImages: 2
        },        
        DiggerSim: {
            ID: "DiggerSim",
            Name: "DiggerSim",
            SmallDescription: "Virtual Reality Excavator & Heavy Equipment Simulator",
            LargeDescription: 'DiggerSim is a thrilling excavator and heavy equipment simulator that puts you in the drivers seat of a powerful excavator. With realistic controls, you will feel like you are really operating heavy machinery. In this game, you will be tasked with completing a variety of excavation jobs, from digging foundations to clearing land. You will have to carefully manoeuvre your excavator through tight spaces and navigate around obstacles to complete the level. As you progress through the game, you will have challenges that will test your skills and abilities. With immersive gameplay and realistic controls, Digger Sim is the ultimate experience for fans of construction and heavy machinery. So put on your hard hat and get ready to dig in!',
            DownloadLink: "https://store.steampowered.com/app/3078960/DiggerSim__Excavator_Simulator/",
            EmbedVideoLinkID: "faplbRO14TI",
            NoOfProjectImages: 7
        },
        Gameplay: {
            ID: "Gameplay",
            Name: "Adam's Bridge",
            SmallDescription: "Hobby projects",
            LargeDescription: "Designed and tested various prototypes of different genres of games like Tower Defense, Match-3, First and Third Person Shooter, Education, Fashion, Strategy and many more.<br>Some of the sample projects I would like to define:<br><br>• Anthropocene-The Game: Real-time strategy game for Android, built on Unity3D to spread message of climatic change and saving the environment. Gameplay: Maintaining balance between renewable and nonrenewable resources and not let in-game temperature rise by 2 degree Celsius <br><br>• Match-3: Built a match-three mini-game during internship period at Mech Mocha Game Std. Pvt. Lim., where player swaps two gems to make a pattern. Game had various combo moves like: 4-match: vertical or horizonal gem crusher, L shape-match: Bomb, 5-match: similar gem distroyer. <br><br>• Tower and Creeps: A tower defense game where player defends Home Tower by placing small towers to hit the Creeps and prevent them to reach the base. <br><br>• Escher Effect: Mimicked an illusion in virtual space. This illusion was also used in game- Monument Valley (by- Us Two).<br><br>• BodyShape: Educational grid game, where player completes a body by using tiles which can only be obtained if the number of turns already took is equal to the space between two tiles.",
            DownloadLink: "",
            EmbedVideoLinkID: "eHmsOpBPxcY",
            NoOfProjectImages: 3
        },
        VR: {
            ID: "VR",
            Name: "Virtual Reality",
            SmallDescription: "10+ Virtual Reality Projects",
            LargeDescription: 'I have worked on a variety of Virtual Reality (VR) applications designed to deliver immersive, interactive, and realistic experiences across multiple domains, including finance, security, education, tourism, and simulation. My projects leverage high-quality VR environments, real-time interactions, and simulation-based learning to create engaging and practical solutions. From virtual banking experiences that enhance financial interactions to security awareness training in VR, virtual gallery tours for cultural exploration, and realistic excavator simulations for training, each project showcases the power of VR in transforming industries. These applications highlight my expertise in Unity, VR development, and interactive 3D simulations, providing innovative and impactful experiences for users.',
            DownloadLink: "",
            EmbedVideoLinkID: "",
            NoOfProjectImages: 6
        },
        ARCarParking: {
            ID: "ARCarParking",
            Name: "AR Car Parking",
            SmallDescription: "Augmented reality parking game",
            LargeDescription: 'App developed at Microsoft code.fun.do organised by Microsoft, India at IIT Kanpur using Unity3D for Google Cardboard. Aim was to develop an App which focuses on Dynamic Teaching-Learning tools to make learning more interesting for students and for teachers to identify gaps and improve methods for teaching.<br><br>• Virtual and augmented reality based encyclopedia for Google Cardboard built using Unity3D for education and teaching purpose <br>• Gathered data from NASA, Wikipedia and Nat Geo documentaries to recreate scaled model of Solar System in virtual space<br>• Designed 3D environment of all planets of the Solar System and included a feature to view surroundings of the planets using Google Cardboard in VR environment<br>• Can be used to teach almost all topics of any subject and can be modified to a full-fledged Encyclopedia<br>• App was built in 24-hour hackathon, Code.fun.do organized by Microsoft, India Development Center at IIT Kanpur',
            DownloadLink: "",
            EmbedVideoLinkID: "WUuUZdxn5OM",
            NoOfProjectImages: 6
        },
        VirtualClothFitting: {
            ID: "VirtualClothFitting",
            Name: "Virtual Cloth Fitting",
            SmallDescription: "Virtual Showroom AR App",
            LargeDescription: 'Chemical Carriageway is an infinitely running 2D game of Car controlled with Touch and Tilt function where player ignores collisions with traffic, drives on a straight highway to reach a Base as the speed of car and Level increase. <br><br>• Infinitely running 2D Android game, developed using Unity3D game platform, coded from scratch in C# using MonoDevelop<br>• Perks/Add-ons: Defense, Magnet, Multiplier, Speed-Add, Life-Add and four different Car models to hold the interest of players<br>• Used concepts of Laws of Motion, Vectors, Calculus, AI Cars, aesthetic and non-aesthetic designing, file handling, OOP, GUI, sound editing<br>• Used Audacity for sound editing and Microsoft PowerPoint for graphic designing and uploaded the application on Google Play Store',
            DownloadLink: "",
            EmbedVideoLinkID: "s5Pr3Ym56tU",
            NoOfProjectImages: 1
        },
        AR: {
            ID: "AR",
            Name: "Augmented Reality",
            SmallDescription: "10+ Augmented Reality Projects",
            LargeDescription: 'I have developed a range of Augmented Reality (AR) applications that enhance user experiences across various domains, including education, healthcare, navigation, and measurement. My projects leverage real-time AR visualization, cloud-based content loading, and location-based interactions to create immersive and interactive experiences. From exploring science and physics models in AR to visualizing medical equipment, measuring real-world objects, and unlocking AR content at specific locations, each application showcases the potential of AR technology in practical and engaging ways. These apps highlight my expertise in Unity, AR development, and interactive 3D experiences, offering innovative solutions for diverse industries.',
            DownloadLink: "",
            EmbedVideoLinkID: "o-qruadJrBw",
            NoOfProjectImages: 6
        },
    }
};