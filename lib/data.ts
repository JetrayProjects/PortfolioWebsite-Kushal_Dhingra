export type Project = {
    id: string;
    title: string;
    video: string;      // Snippet for homepage accordion
    poster: string;     // Poster image for accordion
    movieUrl?: string;  // Main video URL/embed
    about?: string[];   // Array of strings, each acts as a paragraph
    stills?: string[];  // Array of image paths for the Stills tab
};

export type WorkSectionType = {
    title: string;
    projects: Project[];
};

export const workSections: WorkSectionType[] = [
    {
        title: "Films",
        projects: [
            {
                id: "antyesthi",
                title: "Antyesthi",
                video: "/files/videos/Antyesthi/Anthyesti clip.mp4",
                poster: "/files/photos/Antyesthi/STILLS/Screenshot 2025-01-24 at 21.40.06.webp",
                about: [
                    "Antyeshti is an experimental short film that follows Gopal, a first-generation Indian immigrant in the UK, as he navigates the weight of colonial history and modern-day racism. Blending narrative and surreal imagery inspired by Indian mythology, the film explores identity, cultural erasure, and inherited trauma."
                ],
                stills: [
                    "/files/photos/Antyesthi/STILLS/Screenshot 2025-01-23 at 21.18.38.webp",
                    "/files/photos/Antyesthi/STILLS/Screenshot 2025-01-23 at 21.19.08.webp",
                    "/files/photos/Antyesthi/STILLS/Screenshot 2025-01-23 at 21.45.37.webp",
                    "/files/photos/Antyesthi/STILLS/Screenshot 2025-01-23 at 21.46.51.webp",
                    "/files/photos/Antyesthi/STILLS/Screenshot 2025-01-23 at 22.00.29.webp",
                    "/files/photos/Antyesthi/STILLS/Screenshot 2025-01-24 at 21.27.51.webp",
                    "/files/photos/Antyesthi/STILLS/Screenshot 2025-01-24 at 21.29.09.webp",
                    "/files/photos/Antyesthi/STILLS/Screenshot 2025-01-24 at 21.36.43.webp",
                    "/files/photos/Antyesthi/STILLS/Screenshot 2025-01-24 at 21.40.06.webp",
                    "/files/photos/Antyesthi/STILLS/Screenshot 2025-01-24 at 21.42.08.webp",
                    "/files/photos/Antyesthi/STILLS/Screenshot 2025-01-24 at 21.43.30.webp",
                    "/files/photos/Antyesthi/STILLS/Screenshot 2025-01-24 at 21.45.11.webp",
                    "/files/photos/Antyesthi/STILLS/Screenshot 2025-01-24 at 21.59.28.webp",
                    "/files/photos/Antyesthi/STILLS/Screenshot 2025-01-25 at 21.18.44.webp",
                    "/files/photos/Antyesthi/STILLS/Screenshot 2025-01-25 at 21.45.27.webp",
                    "/files/photos/Antyesthi/STILLS/Screenshot 2025-01-25 at 21.53.45.webp",
                    "/files/photos/Antyesthi/STILLS/Screenshot 2025-01-30 at 16.18.29.webp",
                    "/files/photos/Antyesthi/STILLS/Screenshot 2025-01-30 at 16.18.44.webp",
                    "/files/photos/Antyesthi/STILLS/Screenshot 2025-01-30 at 16.50.38.webp",
                    "/files/photos/Antyesthi/STILLS/Screenshot 2025-01-30 at 16.51.05.webp",
                    "/files/photos/Antyesthi/STILLS/Screenshot 2025-01-30 at 16.51.54.webp",
                    "/files/photos/Antyesthi/STILLS/Screenshot 2025-01-30 at 16.52.12.webp",
                    "/files/photos/Antyesthi/STILLS/Screenshot 2025-01-30 at 16.53.16.webp",
                    "/files/photos/Antyesthi/STILLS/Screenshot 2025-01-30 at 16.54.17.webp",
                    "/files/photos/Antyesthi/STILLS/Screenshot 2025-01-30 at 17.04.58.webp",
                    "/files/photos/Antyesthi/STILLS/Screenshot 2025-01-30 at 17.07.12.webp",
                    "/files/photos/Antyesthi/STILLS/Screenshot 2025-01-30 at 17.11.41.webp",
                    "/files/photos/Antyesthi/STILLS/Screenshot 2025-01-30 at 17.31.49.webp",
                    "/files/photos/Antyesthi/STILLS/Screenshot 2025-01-30 at 17.37.32.webp",
                    "/files/photos/Antyesthi/STILLS/Screenshot 2025-01-30 at 17.40.07.webp",
                    "/files/photos/Antyesthi/STILLS/Screenshot 2025-01-30 at 17.43.05.webp",
                    "/files/photos/Antyesthi/STILLS/Screenshot 2025-01-30 at 17.44.48.webp",
                    "/files/photos/Antyesthi/STILLS/Screenshot 2025-01-30 at 17.53.42.webp",
                    "/files/photos/Antyesthi/STILLS/Screenshot 2025-01-30 at 17.59.00.webp",
                    "/files/photos/Antyesthi/STILLS/Screenshot 2025-01-30 at 18.00.55.webp",
                    "/files/photos/Antyesthi/STILLS/Screenshot 2025-01-30 at 18.02.29.webp",
                    "/files/photos/Antyesthi/STILLS/Screenshot 2025-01-30 at 18.07.33.webp",
                    "/files/photos/Antyesthi/STILLS/Screenshot 2025-01-30 at 18.10.46.webp",
                    "/files/photos/Antyesthi/STILLS/Screenshot 2025-01-30 at 18.13.51.webp",
                    "/files/photos/Antyesthi/STILLS/Screenshot 2025-01-30 at 18.21.10.webp",
                    "/files/photos/Antyesthi/STILLS/Screenshot 2025-01-30 at 18.27.04.webp",
                    "/files/photos/Antyesthi/STILLS/Screenshot 2025-01-30 at 18.27.39.webp",
                    "/files/photos/Antyesthi/STILLS/Screenshot 2025-01-30 at 18.34.01.webp",
                    "/files/photos/Antyesthi/STILLS/Screenshot 2025-01-30 at 18.37.12.webp",
                    "/files/photos/Antyesthi/STILLS/Screenshot 2025-01-30 at 18.40.48.webp",
                    "/files/photos/Antyesthi/STILLS/Screenshot 2025-01-30 at 18.42.23.webp",
                    "/files/photos/Antyesthi/STILLS/Screenshot 2025-01-30 at 18.45.09.webp",
                    "/files/photos/Antyesthi/STILLS/Screenshot 2025-01-30 at 18.46.03.webp",
                    "/files/photos/Antyesthi/STILLS/Screenshot 2025-01-30 at 18.50.16.webp",
                    "/files/photos/Antyesthi/STILLS/Screenshot 2025-01-30 at 18.55.40.webp"
                ]
            },
            {
                id: "back-burner",
                title: "On the Back Burner",
                video: "/files/videos/On the Back Burner/oTBB.mp4",
                poster: "/files/photos/On the Back Burner/Screenshot (549).webp",
                about: [
                    "On the Backburner is a slow, intimate drama that follows two immigrant friends in the UK as they drift through conversations about work, dreams, and displacement. Beneath their casual exchanges lies the quiet anxiety of survival — visas, instability, and the fear of being sent back. As tensions rise between responsibility and desire, the film captures the emotional limbo of putting one’s life “on hold” in a foreign land."
                ],
                stills: [
                    "/files/photos/On the Back Burner/Screenshot (534).webp",
                    "/files/photos/On the Back Burner/Screenshot (546).webp",
                    "/files/photos/On the Back Burner/Screenshot (547).webp",
                    "/files/photos/On the Back Burner/Screenshot (549).webp",
                    "/files/photos/On the Back Burner/Screenshot (550).webp",
                    "/files/photos/On the Back Burner/Screenshot (569).webp",
                    "/files/photos/On the Back Burner/Screenshot (570).webp",
                    "/files/photos/On the Back Burner/Screenshot (588).webp",
                    "/files/photos/On the Back Burner/Screenshot (594).webp",
                    "/files/photos/On the Back Burner/Screenshot (596).webp"
                ]
            },
            {
                id: "until-we-dance",
                title: "Until We Dance Again",
                video: "/files/videos/Until We Dance Again/The furnished room clip.mp4",
                poster: "/files/photos/Until We Dance Again/Still 2026-02-18 204336_1.1.2.webp",
                about: [
                    "A moving visual piece centered around a furnished room.",
                ],
                stills: []
            },
            {
                id: "blade-butterfly",
                title: "The Blade and the Butterfly",
                video: "/files/videos/TheBladeandTheButterfly/thebladeandthebutterfly.mp4",
                poster: "/files/photos/The-Blade-and-the-Butterfly/README.webp",
                about: [
                    "Contrast and conflict portrayed through light and shadow.",
                ],
                stills: []
            }
        ]
    },
    {
        title: "Brand Work",
        projects: [
            {
                id: "vendetta",
                title: "Vendetta",
                video: "",
                poster: "/files/photos/Vendetta/IMG_2729.webp",
                about: [
                    "High-contrast commercial style for Vendetta.",
                ],
                stills: []
            }
        ]
    },
    {
        title: "Music Video",
        projects: [
            {
                id: "dundidun",
                title: "Mysie - Dun Di Dun",
                video: "files/videos/MysieDunDiDun/dundidun.mp4",
                poster: "/files/photos/Mysie-DunDiDun/Untitled.webp",
                about: [
                    "Music video for Mysie - Dun Di Dun.",
                ],
                stills: []
            },
            {
                id: "cavn",
                title: "CAVN - Carving Stones ft",
                video: "/files/videos/cavn/Untitled.mp4",
                poster: "/files/photos/cavn/cavn.webp",
                about: [
                    "Music video for CAVN - Carving Stones.",
                ],
                stills: []
            }
        ]
    },
    {
        title: "Film Photography",
        projects: []
    }
];

export function getProjectById(id: string): Project | undefined {
    for (const section of workSections) {
        const found = section.projects.find((p) => p.id === id);
        if (found) return found;
    }
    return undefined;
}
