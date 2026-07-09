// Traducciones al español del contenido dinámico (productos, guías, testimonios).
// Se buscan por id y se mezclan sobre el contenido base en inglés cuando lang === 'es'.

export const productsES = {
  1: { description: "Una crema hidratante diaria ultraligera con ácido hialurónico y péptidos que deja la piel luminosa y nutrida durante 24 horas.", benefits: ["Hidratación 24h", "Luminosidad instantánea", "Apto para todo tipo de piel"] },
  2: { description: "Sérum concentrado con vitamina C al 15%, niacinamida y ácido ferúlico. Unifica el tono, reduce manchas y aporta un brillo extraordinario.", benefits: ["Vitamina C 15%", "Unifica el tono", "Antioxidante potente"] },
  3: { description: "Crema de noche reparadora con retinol encapsulado, aceite de argán y ceramidas. Mientras dormís, ella trabaja.", benefits: ["Retinol encapsulado", "Reparación nocturna", "Anti-edad"] },
  4: { description: "Rodillo de cuarzo rosa 100% auténtico. Reduce la inflamación, mejora la circulación y potencia la absorción de tus serums.", benefits: ["Cuarzo rosa natural", "Reduce la hinchazón", "Masaje facial"] },
  5: { description: "Una fragancia floral-amaderada con notas de rosa de Damasco, pachulí y almizcle blanco.", benefits: ["Notas florales y amaderadas", "Larga duración 8-10h", "Frasco de lujo"] },
  6: { description: "Set de maquillaje con acabado aterciopelado y partículas de luz. Matifica y fija el maquillaje hasta 12 horas.", benefits: ["Fijación 12h", "Partículas luminosas", "Translúcido universal"] },
  7: { description: "Manteca corporal con manteca de karité, aceite de jazmín y vitamina E.", benefits: ["Manteca de karité", "Aroma a jazmín", "Hidratación profunda"] },
  8: { description: "Colección completa de skincare premium con los mejores ingredientes naturales.", benefits: ["Set completo", "Resultados en 4 semanas", "Todos los tipos de piel"] },
};

export const collectionsES = {
  1: { subtitle: "Piel joven y radiante" },
  2: { subtitle: "Realzá tu belleza" },
  3: { subtitle: "Nutrí tu cuerpo" },
  4: { subtitle: "Aromas irresistibles" },
};

export const testimonialsES = {
  1: { text: "Lumière Beauty transformó por completo mi rutina de skincare. Mi piel nunca se había visto tan bien. El sérum de vitamina C es absolutamente mágico." },
  2: { text: "La crema hidratante es mi nuevo ritual de mañana. Se siente como un abrazo para la piel. Los ingredientes son de calidad premium y se nota desde la primera aplicación." },
  3: { text: "Me enamoré de la fragancia Midnight Rose. Es sofisticada, duradera y recibo cumplidos todo el día. Sin dudas mi compra favorita del año." },
};

export const guidesES = {
  1: {
    excerpt: "Descubrí el secreto de la piel de cristal coreana con esta rutina completa de 10 pasos.",
    content: [
      { heading: "¿Qué es la rutina coreana?", text: "La famosa rutina de skincare coreana se basa en la hidratación por capas: en lugar de un solo producto muy concentrado, se usan varios productos livianos que se van sumando para lograr una piel luminosa, elástica y con el famoso efecto \"glass skin\"." },
      { heading: "1-3. Doble limpieza y exfoliación", text: "Todo empieza con una limpieza en aceite para disolver maquillaje y protector solar, seguida de un limpiador en base agua para remover impurezas. Dos o tres veces por semana, sumá un exfoliante suave para renovar la piel sin irritarla." },
      { heading: "4-6. Tónico, esencia y sérum", text: "El tónico reequilibra el pH de la piel y prepara el terreno. La esencia aporta una primera capa de hidratación ultra liviana, y el sérum ataca necesidades específicas: luminosidad, manchas o firmeza, según lo que tu piel necesite." },
      { heading: "7-8. Contorno de ojos y crema hidratante", text: "La piel del contorno de ojos es más fina y necesita su propio producto. Cerrá con una crema hidratante que selle todas las capas anteriores y mantenga la piel nutrida durante horas." },
      { heading: "9-10. Protector solar y cuidado nocturno", text: "De día, el protector solar es el paso no negociable para prevenir el fotoenvejecimiento. De noche, reemplazalo por un tratamiento reparador —como nuestro Hydra Glow Night Cream— para que la piel se regenere mientras dormís." },
      { heading: "Nuestro consejo", text: "No hace falta aplicar los 10 pasos todos los días: empezá con los básicos (limpieza, hidratación y protección solar) y sumá el resto de a poco, según lo que tu piel te vaya pidiendo." },
    ],
  },
  2: {
    excerpt: "Elegir la crema hidratante correcta puede transformar tu piel. Te mostramos cómo.",
    content: [
      { heading: "Por qué la hidratación correcta lo cambia todo", text: "Una crema hidratante mal elegida puede dejar la piel grasa, opaca o tirante. Elegir la fórmula correcta según tu tipo de piel es uno de los pasos que más impacto tiene en cómo se ve y se siente tu rostro." },
      { heading: "Piel seca", text: "Buscá texturas más densas, tipo bálsamo o crema rica, con ingredientes como manteca de karité, ácido hialurónico y ceramidas que retengan la humedad durante todo el día." },
      { heading: "Piel grasa o mixta", text: "Preferí geles o cremas en gel, libres de aceite, con niacinamida o ácido hialurónico en baja concentración: hidratan sin sumar brillo ni obstruir los poros." },
      { heading: "Piel sensible", text: "Elegí fórmulas sin fragancia, con pocos ingredientes activos y compuestos calmantes como centella asiática o avena coloidal, que refuercen la barrera cutánea en vez de irritarla." },
      { heading: "Cómo aplicarla para potenciar sus beneficios", text: "Aplicá la crema sobre la piel todavía húmeda, después del sérum, con movimientos suaves hacia arriba. Esto ayuda a sellar la hidratación de los pasos anteriores en lugar de perderla." },
      { heading: "Nuestra recomendación", text: "Nuestra Radiance Daily Moisturizer está formulada para adaptarse a la mayoría de los tipos de piel gracias a su textura ultraligera con ácido hialurónico y péptidos." },
    ],
  },
  3: {
    excerpt: "De la base al color de labios perfecto: una guía completa para quienes empiezan a maquillarse.",
    content: [
      { heading: "Empezá siempre con la piel preparada", text: "Un buen maquillaje empieza antes de la base: piel limpia, hidratada y con protector solar. Esto ayuda a que el maquillaje dure más y se vea más natural." },
      { heading: "Base: menos es más", text: "Aplicá la base de a poco, con esponja o pincel, desde el centro del rostro hacia afuera. Siempre es más fácil sumar producto que quitar el exceso." },
      { heading: "Corrector e iluminación", text: "Usá el corrector solo donde lo necesites —ojeras, imperfecciones— y sellalo con un poquito de polvo translúcido para que no se acumule con las horas." },
      { heading: "Mejillas y contorno sutil", text: "Sonreí y aplicá el rubor en la zona más alta de las mejillas, difuminando hacia las sienes. Para principiantes, un contorno muy sutil suele lucir más natural que uno muy marcado." },
      { heading: "Ojos y labios", text: "Para el día a día, una sombra neutra y un poco de máscara de pestañas alcanzan. En labios, animate a probar colores versátiles que combinen con distintos looks, de nude a rosado intenso." },
      { heading: "Fijá el resultado", text: "Terminá con un spray fijador para que el maquillaje se mantenga impecable durante 12 horas, como el que usamos como referencia en nuestro Velvet Glow Makeup Set." },
    ],
  },
  4: {
    excerpt: "La guía definitiva para lograr una piel radiante y de aspecto saludable durante todo el año.",
    content: [
      { heading: "El brillo saludable empieza por dentro", text: "Una piel luminosa no depende solo de los productos que usás: el descanso, la hidratación y una alimentación equilibrada tienen un rol enorme en cómo se ve tu piel día a día." },
      { heading: "Exfoliá con moderación", text: "Renovar la piel es clave para eliminar células muertas que la opacan, pero exfoliar de más puede dañar la barrera cutánea. Dos o tres veces por semana suele ser suficiente para la mayoría de los tipos de piel." },
      { heading: "Vitamina C, tu mejor aliada", text: "Un sérum con vitamina C ayuda a unificar el tono, combatir los radicales libres y aportar ese brillo característico casi de forma inmediata. Nuestro Vitamin C Brightening Serum está pensado justamente para eso." },
      { heading: "No te saltees el protector solar", text: "El daño solar acumulado es una de las principales causas de piel opaca y manchas. Usar protector solar todos los días, incluso con nublado, es el hábito con mayor impacto a largo plazo." },
      { heading: "Hidratación en capas", text: "Combinar un sérum hidratante con una crema que selle la humedad ayuda a mantener la piel con ese aspecto \"jugoso\" y saludable durante todo el día." },
      { heading: "El poder del masaje facial", text: "Usar un rodillo de cuarzo rosa, como nuestro Rose Quartz Face Roller, estimula la circulación, reduce la hinchazón y ayuda a que los productos se absorban mejor." },
      { heading: "Constancia por sobre perfección", text: "El brillo saludable es el resultado de hábitos sostenidos en el tiempo, no de un solo producto milagroso. Elegí una rutina simple y sé constante: los resultados llegan solos." },
    ],
  },
};
