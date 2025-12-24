const videosList = [
    { video: 'iconsyimagenes/woonega.mp4', title: 'Jungkook tu esposo' },
    { video: 'iconsyimagenes/geiiiijk.mp4', title: 'Literalmente el amor de tu vida' },
    { video: 'iconsyimagenes/jkcuchi.mp4', title: 'Lo mas bonito que tienes en tu vida' },
    { video: 'iconsyimagenes/jkfe.mp4', title: 'Jungkook pelo moradito porque si para que la vida sea mas bonita y porque te lo mereces' },
    { video: 'iconsyimagenes/gei.mp4', title: 'Jk' },
    { video: 'iconsyimagenes/jkere.mp4', title: 'Jungkook simplemente devoro' },
    { video: 'iconsyimagenes/jeikei.mp4', title: 'alto tema' },
    { video: 'iconsyimagenes/jiminie.mp4', title: 'temazo' },
    { video: 'iconsyimagenes/elliewilliams.mp4', title: 'Ellie Williams porque si' },
    { video: 'iconsyimagenes/jkspider.mp4', title: 'Jungkookspider obvie' },
    { video: 'iconsyimagenes/bendecida.mp4', title: 'En fin Jungkook tu esposo' },
    { video: 'iconsyimagenes/jk12.mp4', title: 'Dtb' },
    { video: 'iconsyimagenes/rosemorajk.mp4', title: 'Que viva el vicio de AURORA con Jungkook' },
    { video: 'iconsyimagenes/jkdianitamepidio.mp4', title: 'Te quiero, dicho por el propio Jungkook' },
];

// 1. Renderizar la lista de videos
// Nota: Eliminé el Set innecesario ya que videosList ya es un array de objetos únicos.
const container = document.getElementById('videosList');

container.innerHTML = videosList.map((item, index) => {
    // La primera clase será 'active' solo para el primer video
    const isActive = index === 0 ? 'active' : ''; 
    return `
        <div class="list ${isActive}">
            <video src="${item.video}" class="list-video" muted></video>
            <h3 class="list-title">${item.title}</h3>
        </div>
    `;
}).join('');

// 2. Lógica para cambiar el video principal
let videoElements = document.querySelectorAll('.video-list-container .list');

videoElements.forEach(vid => {
    vid.onclick = () => {
        // Quitar la clase 'active' de todos
        videoElements.forEach(remove => remove.classList.remove('active'));
        
        // Agregar 'active' al seleccionado
        vid.classList.add('active');
        
        // Obtener datos del video clickeado
        let src = vid.querySelector('.list-video').src;
        let title = vid.querySelector('.list-title').innerHTML;
        
        // Actualizar el reproductor principal
        let mainVideo = document.querySelector('.main-video-container .main-video');
        let mainTitle = document.querySelector('.main-video-container .main-vid-title');
        
        mainVideo.src = src;
        mainVideo.play();
        mainTitle.innerHTML = title;
    };
});