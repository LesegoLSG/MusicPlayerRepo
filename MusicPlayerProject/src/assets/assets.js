import bell_icon from './bell.png'
import home_icon from './home.png'
import like_icon from './like.png'
import loop_icon from './loop.png'
import mic_icon from './mic.png'
import next_icon from './next.png'
import play_icon from './play.png'
import pause_icon from './pause.png'
import plays_icon from './plays.png'
import prev_icon from './prev.png'
import search_icon from './search.png'
import shuffle_icon from './shuffle.png'
import speaker_icon from './speaker.png'
import stack_icon from './stack.png'
import zoom_icon from './zoom.png'
import plus_icon from './plus.png'
import arrow_icon from './arrow.png'
import mini_player_icon from './mini-player.png'
import queue_icon from './queue.png'
import volume_icon from './volume.png'
import arrow_right from './right_arrow.png'
import arrow_left from './left_arrow.png'
import spotify_logo from './spotify_logo.png'
import clock_icon from './clock_icon.png'
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import img4 from './img4.jpg'
import img5 from './img5.jpg'
import img6 from './img6.jpg'
import img7 from './img7.jpg'
import img8 from './img8.jpg'
import img9 from './img9.jpg'
import img10 from './img10.jpg'
import img11 from './img11.jpg'
import img12 from './img12.jpg'
import img13 from './img13.jpg'
import img14 from './img14.jpg'
import img15 from './img15.jpg'
import img16 from './img16.jpg'
import song1 from  './song1.mp3'
import song2 from  './song2.mp3'
import song3 from  './song3.mp3'

//Songs Images
import kabza from './kabza.png'
import KabzaIsimo from './KabzaIsimo.jpg'
import Kina from './Kina.jpg'
import YesGod from './YesGod.jpg'
import StokieImage from './StokieImage.png'
import AnnesImage from './AnnesImage.png'
import MlindoAlbum from './MlindoAlbum.jpg'
import Sheebe from './Sheebe.png'
import BigZuluImage from './BigZuluImage.png'
import JoyousImage from './JoyousImage.png'

//Songs
import KabzaAudio from './KabzaAudio.mp3'
import KabzaIsimoAudio from './KabzaIsimoAudio.mp3'
import KinaAudio from './KinaAudio.mp3'
import YesGodAudio from './YesGodAudio.mp3'
import StokieAudio from './StokieAudio.mp3'
import AnnesAudio from './AnnesAudio.mp3'
import MlindoAudio from './MlindoAudio.mp3'
import SheebeAudio from './SheebeAudio.mp3'
import BigZuluAudio from './BigZuluAudio.mp3'
import JoyousAudio from './JoyousAudio.mp3'


//Album Images
import Top50 from "../assets/AlbumImages/Top50.jpg";
import WeeklyCharts from "../assets/AlbumImages/WeeklyCharts.jpg";
import MegaHit from "../assets/AlbumImages/MegaHit.png";
import NewFriday from "../assets/AlbumImages/NewFriday.png";
import Viral50 from '../assets/AlbumImages/Viral50.jpg'


export const assets = {
    bell_icon,
    home_icon,
    like_icon,
    loop_icon,
    mic_icon,
    next_icon,
    play_icon,
    plays_icon,
    prev_icon,
    search_icon,
    shuffle_icon,
    speaker_icon,
    stack_icon,
    zoom_icon,
    plus_icon,
    arrow_icon,
    mini_player_icon,
    volume_icon,
    queue_icon,
    pause_icon,
    arrow_left,
    arrow_right,
    spotify_logo,
    clock_icon
}

export const albumsData = [
    {   
        id:0,
        name: "Top 50 Global",
        image: img8,
        desc:"Discover the world's most popular tracks updated weekly",
        bgColor:"#2a4365"
    },
    {   
        id:1,
        name: "Top 50 South Africa",
        image: Top50,
        desc:"Stay updated with South Africa's hottest tracks of the week",
        bgColor:"#22543d"
    },
    {   
        id:2,
        name: "Trending South Africa",
        image: WeeklyCharts,
        desc:" Catch the latest trends in South African music with weekly updates",
        bgColor:"#4fa183"
    },
    {   
        id:3,
        name: "Trending Global",
        image: img16,
        desc:"Explore the trending tracks globally, refreshed every week",
        bgColor:"#44337a"
    },
    {   
        id:4,
        name: "Mega Hits",
        image: MegaHit,
        desc:"Dive into the biggest hits of the week, all in one place",
        bgColor:"#a14f8e"
    },
    {   
        id:5,
        name: "Happy Fridays",
        image: NewFriday,
        desc:"Start your weekend with the happiest tracks, updated weekly",
        bgColor:"#744210"
    },
    {   
        id:6,
        name: "Happy Favorites",
        image: img15,
        desc:"Enjoy your favorite happy tunes, refreshed every week",
        bgColor:"#acbf3f"
    },
    {   
        id:7,
        name: "Viral 50 Global",
        image: Viral50,
        desc:"Discover the songs going viral, updated weekly",
        bgColor:"#744210"
    }
]


export const songsData = [
    {
        id:0,
        name: "Khusela",
        image: kabza,
        file:KabzaAudio,
        desc:"Kabza De Small ft. Msaki (official)",
        duration:"08:22"
    },
    {
        id:1,
        name: "Isimo",
        image: KabzaIsimo,
        file:KabzaIsimoAudio,
        desc:"Kabza De Small ft. Mthunzi",
        duration:"04:14"
    },
    {
        id:2,
        name: "Get You The Moon",
        image: Kina,
        file:KinaAudio,
        desc:"Kina ft. Snow",
        duration:"03:14"
    },
    {
        id:3,
        name: "Yes God",
        image: YesGod,
        file:YesGodAudio,
        desc:"Oscar Mbo ft. KG Smallz, Morda, Thakzin, & Mhaw Keys",
        duration:"04:00"
    },
    {
        id:4,
        name: "Awukhuzeki",
        image: StokieImage,
        file:StokieAudio,
        desc:"Dj Stokie Ft, Ommit, Sobzeen & Zeenhle",
        duration:"06:33"
    },
    {
        id:5,
        name: "Leave Me",
        image: AnnesImage,
        file:AnnesAudio,
        desc:"Annes",
        duration:"03:40"
    },
    {
        id:6,
        name: "Imoto",
        image: MlindoAlbum,
        file:MlindoAudio,
        desc:"Put a smile on your face with these happy tunes",
        duration:"04:34"
    },
    {
        id:7,
        name: "Malume",
        image: Sheebe,
        file:SheebeAudio,
        desc:"Sheebe shxt",
        duration:"03:20"
    },
    {
        id:8,
        name: "Inhlupheko",
        image: BigZuluImage,
        file:BigZuluAudio,
        desc:"Big Zulu Ft. Mduduzi Ncube",
        duration:"05:16"
    },
    {
        id:9,
        name: "Ndenzel'Uncebo",
        image: JoyousImage,
        file:JoyousAudio,
        desc:"Joyous Celebration",
        duration:"07:35"
    }
]