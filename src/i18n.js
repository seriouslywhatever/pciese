import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            "English": "English",
            "Spanish": "Spanish",
            "Call us": "Call us",
            "Location": "Location",
            "Home": "Home",
            "About Us": "Abous Us",
            "Services": "Services",
            "Contact Us": "Contact Us",

            "Testimonial part 1": '"In our professional life, there are highs and lows, which are evident everywhere. ',
            "Testimonial part 2": 'For this, perseverance and consistency are our best protectors against adversity."',

            "About part 1": "We are engineering professionals with over 35 years of experience in multidisciplinary projects.",
            "About part 2": "Our company develops projects in:",

            "Tab item 1 title": "Urban planning",
            "Tab item 1": "We conduct topographic surveys, adjust parceling according to local urban variables, and modify terraces based on the original topography and external drainage requirements.",
            "Tab item 2 title": "Water management systems",
            "Tab item 2": "Our water management systems include the development of aqueducts, sewer systems, and drainage projects for urban areas. We also design potable water systems (both cold and hot) and sanitary installations with appropriate stormwater disposal in buildings, as well as swimming pools for private or public use, including the necessary suction, recirculation pipes, and structural solutions tailored to the environment.",
            "Tab item 3 title": "Architectural design",
            "Tab item 3": "For housing and buildings, we develop architectural and structural projects in accordance with local regulations.",
            "Tab item 4 title": "Structural engineering",
            "Tab item 4": "Our bridge designs encompass pedestrian, vehicular, and service bridges, using materials and methods such as reinforced concrete, metal beams, and pre-tensioned or post-tensioned structures, as well as suspension bridges.",
            "Tab item 5 title": "Sanitary installations",
            "Tab item 5": "We handle the design and implementation of sanitary installations, ensuring proper potable water systems and effective stormwater disposal in buildings.",

            "Service subtext": "Explore What We Offer",

            "Service card 1 title": "Civil and Sanitary Works Projects",
            "Service card 1 preText": "This service involves the preparation of:",
            "Service card 1 body 1": "Urban Planning, Housing, Buildings, Roads, and Bridges Projects.",
            "Service card 1 body 2": "Structural Design of Housing, Buildings, and Bridges.",
            "Service card 1 body 3": "Project and Design of Aqueducts, Sewers, and Drainage in Urban Developments.",
            "Service card 1 body 4": "Project and Design of Potable Water (cold and hot) and Sanitary Installations in housing and buildings.",
            "Service card 1 body 5": "Project and Structural Design of Swimming Pools with their respective suction and recirculation pipes.",

            "Service card 2 title": "Cost Estimation (Unit Price Analysis)",
            "Service card 2 preText": "This service involves the preparation of:",
            "Service card 2 body 1": "A mathematical model that forecasts the outcome, expressed in currency, of a situation related to the activity under study.",

            "Service card 3 title": "Preparation of Project Budgets",
            "Service card 3 preText": "This service involves Estimating the Project Cost by compiling all activities indicated in the APU with their respective estimated quantities in the preparation of the Metric Computations.",

            "Service card 4 title": "Preparation of Metric Computations",
            "Service card 4 preText": "This service involves determining the quantity of measurement of lengths, areas, volumes, weights, units, etc., requiring the use of geometric formulas. The responsibility of the person in charge of the computations is significant, as this work can result in losses or gains for owners or contractors.",

            "Service card 5 title": "PERT-CPM Project Scheduling",
            "Service card 5 preText": "This service involves the preparation of:",
            "Service card 5 body 1": "A Project Timeline using the PERT-CPM method, which allows managing the project schedule (Program Evaluation and Review Technique) and identifying critical path activities (Critical Path Method), thereby determining the duration of the project.",
            "Service card 5 body 2": "Investment Schedule.",
            "Service card 5 body 3": "Cash Flow.",

            "Service card 6 title": "Construction & inspection of Civil Works",
            "Service card 6 preText": "This service involves the Construction and or Inspection of Infrastructure and Superstructure Works in Roads and Buildings, Aqueducts, Sewers, and Drainage in Urban Developments, Potable Water and Sanitary Installations in Housing and Buildings, etc. It also includes performing Quality Control of Concrete, Soil, and Asphalt.",

            "Learn more": "learn More",
        }
    },
    es: {
        translation: {
            "English": "Inglés",
            "Spanish": "Español",
            "Call us": "Llamanos",
            "Location": "Ubicación",
            "Home": "Inicio",
            "About Us": "Sobre Nosotros",
            "Services": "Servicios",
            "Contact Us": "Contáctanos",

            "Testimonial part 1": '"En nuestra vida profesional se tienen altos y bajos, esto se aprecia en todas las latitudes.',
            "Testimonial part 2": 'Para ello la constancia y la perseverancia son nuestros mejores protectores ante la adversidad."',

            "About part 1": "Somos profesionales de la ingeniería con más de 35 años de experiencia en proyectos multidisciplinarios.",
            "About part 2": "Nuestra empresa desarrolla proyectos en:",

            "Tab item 1 title": "Planificación urbana",
            "Tab item 1": "Realizamos levantamientos topográficos, ajustamos parcelamientos según las variables urbanas locales y modificamos terrazas basándonos en la topografía original y los requisitos de drenaje externo.",
            "Tab item 2 title": "Sistemas de gestión del agua",
            "Tab item 2": "Nuestros sistemas de gestión de agua incluyen el desarrollo de proyectos de acueductos, alcantarillados y drenajes para áreas urbanas. También diseñamos sistemas de agua potable (tanto fría como caliente) e instalaciones sanitarias con una adecuada disposición de aguas pluviales en edificios, así como piscinas para uso privado o público, incluyendo las tuberías necesarias de succión, recirculación y soluciones estructurales adaptadas al entorno.",
            "Tab item 3 title": "Diseño arquitectónico",
            "Tab item 3": "Para viviendas y edificios, desarrollamos proyectos arquitectónicos y estructurales de acuerdo con las regulaciones locales.",
            "Tab item 4 title": "Ingeniería estructural",
            "Tab item 4": "Nuestros diseños de puentes abarcan puentes peatonales, vehiculares y de servicio, utilizando materiales y métodos como concreto reforzado, vigas metálicas y estructuras pretensadas o postensadas, así como puentes colgantes.",
            "Tab item 5 title": "Instalaciones sanitarias",
            "Tab item 5": "Nos encargamos del diseño e implementación de instalaciones sanitarias, asegurando sistemas adecuados de agua potable y una efectiva disposición de aguas pluviales en edificios.",

            "Service subtext": "Descubre Lo Que Ofrecemos",

            "Service card 1 title": "Proyectos de Obras Civiles y Sanitarias",
            "Service card 1 preText": "Este servicio implica la preparación de:",
            "Service card 1 body 1": "Proyectos de Planificación Urbana, Vivienda, Edificios, Carreteras y Puentes.",
            "Service card 1 body 2": "Diseño Estructural de Viviendas, Edificios y Puentes.",
            "Service card 1 body 3": "Proyecto y Diseño de Acueductos, Alcantarillados y Drenajes en Desarrollos Urbanos.",
            "Service card 1 body 4": "Proyecto y Diseño de Agua Potable (fría y caliente) e Instalaciones Sanitarias en viviendas y edificios.",
            "Service card 1 body 5": "Proyecto y Diseño Estructural de Piscinas con sus respectivas tuberías de succión y recirculación.",

            "Service card 2 title": "Estimación de Costos (APU)",
            "Service card 2 preText": "Este servicio implica la preparación de:",
            "Service card 2 body 1": "Un modelo matemático que pronostica el resultado, expresado en moneda, de una situación relacionada con la actividad en estudio.",

            "Service card 3 title": "Preparación de Presupuestos de Proyectos",
            "Service card 3 preText": "Este servicio implica Estimar el Costo del Proyecto compilando todas las actividades indicadas en el APU con sus respectivas cantidades estimadas en la preparación de los Cálculos Métricos.",

            "Service card 4 title": "Preparación de Cálculos Métricos",
            "Service card 4 preText": "Este servicio implica determinar la cantidad de medición de longitudes, áreas, volúmenes, pesos, unidades, etc., requiriendo el uso de fórmulas geométricas. La responsabilidad de la persona encargada de los cálculos es significativa, ya que este trabajo puede resultar en pérdidas o ganancias para propietarios o contratistas.",

            "Service card 5 title": "Programación de Proyectos PERT-CPM",
            "Service card 5 preText": "Este servicio implica la preparación de:",
            "Service card 5 body 1": "Un Cronograma del Proyecto utilizando el método PERT-CPM, que permite gestionar el cronograma del proyecto (Técnica de Evaluación y Revisión de Programas) e identificar las actividades del camino crítico (Método del Camino Crítico), determinando así la duración del proyecto.",
            "Service card 5 body 2": "Cronograma de Inversiones.",
            "Service card 5 body 3": "Flujo de Efectivo.",

            "Service card 6 title": "Construcción e Inspección de Obras Civiles",
            "Service card 6 preText": "Este servicio implica la Construcción y/o Inspección de Obras de Infraestructura y Superestructura en Carreteras y Edificios, Acueductos, Alcantarillados y Drenajes en Desarrollos Urbanos, Agua Potable e Instalaciones Sanitarias en Viviendas y Edificios, etc. También incluye realizar Control de Calidad de Concreto, Suelo y Asfalto.",

            "Learn more": "Saber Más",
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
        // if you're using a language detector, do not define the lng option
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;