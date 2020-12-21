/* CONFIG */
let recognition = new webkitSpeechRecognition();

recognition.lang = 'es-ES';
recognition.continuous = true;
recognition.interimResults = false;
recognition.start();


recognition.onresult = (event) => {

    const results = event.results;
    const frase = results[results.length - 1][0].transcript;
    console.log(frase);

    const google = frase.search('google');
    const google2 = frase.search('Google');
    const twitter = frase.search('Twitter');
    const twitter2 = frase.search('twitter');
    const youtube = frase.search('youtube');
    const youtube2 = frase.search('Youtube');
    const git = frase.search('git');
    const git2 = frase.search('Git');
    const cursos = frase.search('cursos');
    const cursos2 = frase.search('Cursos');

    if (google != -1 || google2 != -1) {
        window.location.href = "https://www.google.com/";
    }
    if (twitter != -1 || twitter2 != -1) {
        window.location.href = "https://twitter.com/home";
    }
    if (youtube != -1 || youtube2 != -1) {
        window.location.href = "https://www.youtube.com/";
    }
    if (git != -1 || git2 != -1) {
        window.location.href = "https://github.com/KuramaBiju?tab=repositories";
    }
    if (cursos != -1 || cursos2 != -1) {
        window.location.href = "https://www.coursera.org/learn/uol-machine-learning-for-all?aid=true&authMode=login";
    }

}

recognition.onend = (event) => {
    console.log("El microfono deja de escuchar");
}

recognition.onerror = (event) => {
    console.error(event.error);
}