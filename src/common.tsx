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
import SewSustainable from "./pages/projects/SewSustainable/SewSustainable"


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
        url: "links",
        image: multimodalMusicImg,
        tags: ["research", "hci"]
    },
    {
        title: "Orb Weaver",
        url: "links",
        image: orbWeaverImg,
        tags: ["webdev", "art"]
    },
    {
        title: "NASA Diminished Reality",
        url: "links",
        image: "orbweaver.png",
        tags: ["research", "hci"]
    },
    {
        title: "Voicemail",
        url: "links",
        image: "orbweaver.png",
        tags: ["art"]
    },
    {
        title: "Synchronized Swimming Auditory Interface",
        url: "links",
        image: "orbweaver.png",
        tags: ["hci"]
    },
    {
        title: "Nyan Cat (Remix)",
        url: "links",
        image: nyanCatImg,
        tags: ["art"]
    },
    {
        title: "Sync or Sink",
        url: "links",
        image: syncOrSinkImg,
        tags: ["art"]
    },
]

const media = {
    desktop: "(min-width): 1024px",
    portrait: "(min-aspect-ratio): 1/1"
}

export { navRoutes, projectRoutes, projects };