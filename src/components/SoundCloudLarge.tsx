const SoundCloudLarge = ({artist, track, artistURL, trackURL, trackID}: {artist: string, track: string, artistURL: string, trackURL: string, trackID: string}) => {
    return (
        <>
            <iframe 
                width="100%" 
                height="300" 
                scrolling="no" 
                frameBorder="no" 
                allow="autoplay" 
                src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${trackID}&color=%2372b1d2&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`}>
            </iframe>
            <div 
                style={{fontSize: "10px", 
                    color: "#cccccc",
                    lineBreak: "anywhere",
                    wordBreak: "normal",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    fontFamily: "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
                    fontWeight: "100"
                }}>
                    <a 
                        href={artistURL}
                        title={artist}
                        target="_blank" 
                        style={{
                            color: "#cccccc", 
                            textDecoration: "none"}}
                        >
                            {artist}
                    </a> · <a 
                        href={trackURL}
                        title={track}
                        target="_blank" 
                        style={{
                            color: "#cccccc", 
                            textDecoration: "none"}}
                    >
                        {track}
                    </a>
            </div>
        </>
    )
}

export default SoundCloudLarge;