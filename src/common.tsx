import Projects from "./pages/projects/Projects"
import Links from "./pages/links/Links"
import Home from "./pages/home/Home"

import SpotifyKaraoke from "./pages/projects/SpotifyKaraoke/SpotifyKaraoke"
import VideoSonification from "./pages/projects/VideoSonification/VideoSonification"

import spotifyKaraokeImg from "./assets/images/spotify_karaoke.png"
import videoSonificationImg from "./assets/images/video_sonification.png"
import sewSustainableImg from "./assets/images/sewsustainable.png"
import multimodalMusicImg from "./assets/images/multimodal_music.png"
import orbWeaverImg from "./assets/images/orb_weaver.png"
import nyanCatImg from "./assets/images/nyan_cat.png"
import syncOrSinkImg from "./assets/images/sync_or_sink.png"
import diminishedRealityImg from "./assets/images/diminished_reality.png";
import voicemailImg from "./assets/images/voicemail.png";
import auditoryInterfaceImg from "./assets/images/auditory_interface.png";

import SewSustainable from "./pages/projects/SewSustainable/SewSustainable"
import MusicAccessibility from "./pages/projects/MusicAccessibility/MusicAccessibility"
import OrbWeaver from "./pages/projects/OrbWeaver/OrbWeaver"
import DiminishedReality from "./pages/projects/DiminishedReality/DiminishedReality"
import Voicemail from "./pages/projects/Voicemail/Voicemail"
import NyanCat from "./pages/projects/NyanCat/NyanCat"
import SyncOrSink from "./pages/projects/SyncOrSink/SyncOrSink"
import AuditoryInterface from "./pages/projects/AuditoryInterface/AuditoryInterface"



const navRoutes = [
    {
        path: "home",
        element: <Home />,
    },
    {
        path: "projects",
        element: <Projects />,
    },
    {
        path: "links",
        element: <Links />
    }
]

const projectRoutes = [
    {
        path: "projects/spotify_karaoke",
        element: <SpotifyKaraoke />,
    },
    {
        path: "projects/video_sonification",
        element: <VideoSonification />
    },
    {
        path: "projects/sewsustainable",
        element: <SewSustainable />
    },
    {
        path: "projects/music_accessibility",
        element: <MusicAccessibility />
    },
    {
        path: "projects/orb_weaver",
        element: <OrbWeaver />
    },
    {
        path: "projects/diminished_reality",
        element: <DiminishedReality />
    },
    {
        path: "projects/voicemail",
        element: <Voicemail />
    },
    {
        path: "projects/auditory_interface",
        element: <AuditoryInterface />
    },
    {
        path: "projects/nyan_cat",
        element: <NyanCat />
    },
    {
        path: "projects/sync_or_sink",
        element: <SyncOrSink />
    }

]

const projects = [
    {
        title: "Spotify Karaoke",
        url: "spotify_karaoke",
        image: spotifyKaraokeImg,
        tags: ["webdev"]
    },
    {
        title: "Video Sonification",
        url: "video_sonification",
        image: videoSonificationImg,
        tags: ["webdev"]
    },
    {
        title: "SewSustainable",
        url: "sewsustainable",
        image: sewSustainableImg,
        tags: ["hci"]
    },
    {
        title: "Multimodal Music Accessibility",
        url: "music_accessibility",
        image: multimodalMusicImg,
        tags: ["research", "hci"]
    },
    {
        title: "Orb Weaver",
        url: "orb_weaver",
        image: orbWeaverImg,
        tags: ["webdev", "fun"]
    },
    {
        title: "NASA Diminished Reality",
        url: "diminished_reality",
        image: diminishedRealityImg,
        tags: ["research", "hci"]
    },
    {
        title: "Voicemail",
        url: "voicemail",
        image: voicemailImg,
        tags: ["fun"]
    },
    {
        title: "Synchro Auditory Interface",
        url: "auditory_interface",
        image: auditoryInterfaceImg,
        tags: ["hci"]
    },
    {
        title: "Nyan Cat (Remix)",
        url: "nyan_cat",
        image: nyanCatImg,
        tags: ["fun"]
    },
    {
        title: "Sync or Sink",
        url: "sync_or_sink",
        image: syncOrSinkImg,
        tags: ["fun"]
    },
]

export { navRoutes, projectRoutes, projects };