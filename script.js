// inicializacao gsap //
gsap.registerPlugin(ScrollTrigger);

// animacoes da navegacao //
// Efeito de encolhimento do header ao rolar a página
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        gsap.to(header, { padding: "0.8rem 5%", duration: 0.3, ease: "power2.out" });
    } else {
        gsap.to(header, { padding: "1.5rem 5%", duration: 0.3, ease: "power2.out" });
    }
});

// hero //
// Entrada suave do texto principal
gsap.from(".hero-content h1", {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    delay: 0.2
});

gsap.from(".hero-content p", {
    y: 30,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    delay: 0.4
});

// sobre a dolfyn //
gsap.from(".sobre-text-block > *", {
    scrollTrigger: {
        trigger: "#sobre-a-dolfyn",
        start: "top 75%",
    },
    x: -50,
    opacity: 0,
    duration: 1.2,
    stagger: 0.2,
    ease: "power4.out"
});

// animações da seção de serviços //
gsap.from(".servicos-header > *", {
    scrollTrigger: {
        trigger: "#nossos-servicos",
        start: "top 80%",
    },
    y: 30,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out"
});

gsap.from(".card-neon-service", {
    scrollTrigger: {
        trigger: ".servicos-cards-col",
        start: "top 85%",
    },
    x: -30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: "power2.out"
});

gsap.from(".servicos-image-col", {
    scrollTrigger: {
        trigger: ".servicos-image-col",
        start: "top 80%",
    },
    x: 30,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
});

// --- PROGRAMAS DE TREINAMENTO GSAP --- //
document.addEventListener("DOMContentLoaded", () => {
    
    // Garante que o plugin está ativo
    gsap.registerPlugin(ScrollTrigger);

    // Animação do Título e Texto
    gsap.from(".treinamento-header > *", {
        scrollTrigger: {
            trigger: "#programas-treinamento",
            start: "top 85%", // Gatilho seguro
        },
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
    });

    // Animação dos Cards Glassmorphism
    gsap.from(".treinamento-card", {
        scrollTrigger: {
            trigger: ".treinamento-grid",
            start: "top 85%", // Dispara assim que a grade chega perto da tela
        },
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "back.out(1.2)",
        // O PULO DO GATO:
        clearProps: "all" // Remove as tags de opacity/transform injetadas pelo GSAP após animar, liberando o Hover do CSS
    });

});

// porque investir em treinamento //
document.addEventListener("DOMContentLoaded", () => {
    
    // Título surge de cima
    gsap.from(".investir-content h2", {
        scrollTrigger: {
            trigger: "#porque-investir",
            start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });

    // Cards entram em cascata pela esquerda
    gsap.from(".investir-card", {
        scrollTrigger: {
            trigger: ".investir-lista-cards",
            start: "top 85%",
        },
        x: -40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15, 
        ease: "power2.out",
        clearProps: "all" // Garante que o hover funcione depois
    });

    // Imagem entra deslizando pela direita
    gsap.from(".investir-visual", {
        scrollTrigger: {
            trigger: "#porque-investir",
            start: "top 75%",
        },
        x: 50,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"
    });
});

// animação de cascata para o portfólio //
gsap.from(".flip-card", {
    scrollTrigger: {
        trigger: ".portfolio-gallery-grid",
        start: "top 85%",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.15,
    ease: "power3.out"
});

// nossos clientes //
gsap.from(".clientes-header", {
    scrollTrigger: {
        trigger: "#nossos-clientes",
        start: "top 80%",
    },
    y: 30,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});

// --- ANIMAÇÃO DEPOIMENTOS TIMELINE --- //
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Animando a linha de progresso conforme o scroll
    gsap.to(".timeline-progress", {
        height: "100%",
        ease: "none",
        scrollTrigger: {
            trigger: ".timeline-items",
            start: "top 70%", // Começa quando o topo da lista chega em 70% da tela
            end: "bottom 70%", // Termina quando o fim da lista chega em 70%
            scrub: true, // Sincroniza com o movimento do mouse
        }
    });

    // 2. Animando cada item (Número e Texto)
    const items = document.querySelectorAll(".timeline-item");

    items.forEach((item) => {
        const color = item.getAttribute("data-color");
        const number = item.querySelector(".timeline-number");

        gsap.to(item, {
            opacity: 1,
            x: 0,
            duration: 1,
            scrollTrigger: {
                trigger: item,
                start: "top 75%", // Surge quando o item entra na tela
                toggleActions: "play none none none"
            }
        });

        // Efeito de "acender" o círculo quando a linha passar por ele
        gsap.to(number, {
            borderColor: color,
            boxShadow: `0 0 20px ${color}`,
            color: color,
            duration: 0.5,
            scrollTrigger: {
                trigger: item,
                start: "top 70%",
                toggleActions: "play reverse play reverse"
            }
        });
    });
});

// Animação da Seção CTA
document.addEventListener("DOMContentLoaded", () => {
    
    // Conteúdo principal
    gsap.from(".cta-content > *", {
        scrollTrigger: {
            trigger: "#contato-cta",
            start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out"
    });

    // Cards de contato em cascata
    gsap.from(".canal-card", {
        scrollTrigger: {
            trigger: ".canais-grid",
            start: "top 90%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)"
    });
});

// --- BOTÃO VOLTAR AO TOPO --- //
document.addEventListener("DOMContentLoaded", () => {
    const btnTopo = document.getElementById("btn-voltar-topo");

    // Mostra ou esconde o botão dependendo do scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) { // Mostra após descer 300px
            btnTopo.classList.add("mostrar");
        } else {
            btnTopo.classList.remove("mostrar");
        }
    });

    // Evento de clique para subir suavemente
    btnTopo.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});