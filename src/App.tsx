import React from "react";

// Definir los tipos para los props del componente Comment
interface CommentProps {
  date: string;
  name: string;
  comment: string;
}

const Comment: React.FC<CommentProps> = ({ date, name, comment }) => {
  return (
    <div className="comment">
      <p><strong>Fecha:</strong> {date}</p>
      <p><strong>Nombre:</strong> {name}</p>
      <p><strong>Comentario:</strong> {comment}</p>
    </div>
  );
};

const App: React.FC = () => {
  // Definimos el arreglo de comentarios con un tipo explícito
  const commentData: CommentProps[] = [
    {
      date: "2025-05-10",
      name: "Juan Pérez",
      comment: "Fue un evento muy lindo, donde compartí en familia."
    },
    {
      date: "2025-05-11",
      name: "Ana Gómez",
      comment: "Disfruté mucho de las actividades al aire libre. ¡Excelente organización!"
    },
    {
      date: "2025-05-12",
      name: "Carlos López",
      comment: "La caminata fue increíble, la vista desde la cima es impresionante."
    }
  ];

  return (
    <div>
      {/* Header */}
      <header className="fade-in">
        <h1>Recreativa San Pedro 2025</h1>
        <p>¡Inscríbete para disfrutar del evento más esperado del año!</p>
      </header>

      {/* Main Content */}
      <main>
        <section className="event-description fade-in">
          <h2>Sobre el evento</h2>
          <p>
            La Recreativa San Pedro es un evento familiar con actividades
            deportivas para todas las edades. Participa en bici, caminata o
            ambos. ¡Ven y disfruta de un día lleno de diversión!
          </p>
        </section>

        {/* Galería de imágenes */}
        <section className="gallery fade-in">
          <h2>Galería de Fotos</h2>
          {/* Carrusel o galería de imágenes */}
        </section>

        {/* Comentarios */}
        <section className="comments-section fade-in">
          <h2>Comentarios</h2>
          <div className="comments-list">
            {commentData.map((comment, index) => (
              <Comment
                key={index}
                date={comment.date}
                name={comment.name}
                comment={comment.comment}
              />
            ))}
          </div>
        </section>

        {/* Formulario de Inscripción */}
        <section className="form-section fade-in">
          <h2>Formulario de Inscripción</h2>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdSLT2jSNYrkg-uGv3-yvp31tSapnTHkO_TkdWPvqhVcYmeHA/viewform?usp=header"
            width="100%"
            height="600"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Formulario de inscripción"
          >
            Cargando…
          </iframe>
        </section>
      </main>

      {/* Footer */}
      <footer className="fade-in">
        <p>Contacto: recreativa@sanpedro.com</p>
        <div className="social-media">
          <a href="#">Facebook</a> | <a href="#">Instagram</a> | <a href="#">Twitter</a>
        </div>
      </footer>

      {/* Botón WhatsApp */}
      <div className="whatsapp-button">
        <a href="https://wa.me/85517052" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>
    </div>
  );
};

export default App;
