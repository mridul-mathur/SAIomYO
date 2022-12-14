import React, { Component } from 'react'
import om from '../../assets/ompinkgrad.png'
import girl1 from '../../assets/qw.jpg';
import girl2 from '../../assets/qt.jpg';
import "./Retreat_page.styles.scss";
import Button from '../../components/Button/Button.component';
import Footer from '../../components/Footer/Footer.component';
import { Link } from 'react-router-dom';


const LANG={'english':["3 DAYS RETREAT","The goal of the three-day retreats is to give you a therapeutic experience through different forms of Meditation combined with Hatha Yoga. The three-day retreats help you achieve the ideal balance between your mental and physical health by bringing peace, eliminating anxiety and stress, and increasing attentiveness and enthusiasm. The 3-day retreats are the perfect option if you want to establish a positive atmosphere around yourself and begin your spiritual journey.","7 DAYS RETREAT","The 7-day retreats are designed to give you a thorough understanding of the intricacies of spiritual practices like different Meditation forms and Yoga practices like Pranayam and Hatha Yoga to revive your inner self. This will introduce you to an unmatched experience of healing and energising, both spiritually and physically.You will be able to assess noticeable differences in stress levels, decision-making skills, and general approach toward life, after the seven-day retreats.It is the best choice for you if you want to uncover your most upbeat, healthy, and spiritually adept side through Yoga and Meditation.","12 DAYS RETREAT","The 12-day retreats include a series of personalised Meditation and yoga practices created specifically for you to meet your physical and mental health requirements, instil positivity and experience inner healing. These retreats are the best option if you want to use the therapeutic and healing effects of spiritual practices like meditation combined with yoga to transform your physical well-being as well as revitalise your inner self and meet a new YOU.","Mediation and","Yoga ", "retreats","days","Learn","Retreat Inclusions","Venue dates and fee descriptions","Apply now","The three-day retreats include both beginner and advanced Dhyana, Pranayams and Yoga Asanas, 7 Chakras Healing meditation, as well as free Aroma Therapies, Foot Massages, and Ayurvedic Healing Massages.These retreats offer live rajasthani folk dance performances as a special attraction along with serene , calm and high-quality accommodation and adequate satvik food .","A series of advance Pranayams and Kriyas, Vinyasa Flow Yoga Asana, Hatha yoga, and various forms of meditation techniques, including healing 7 Chakras, are all included in the 7-day retreat to guarantee that positive energy is properly absorbed.One 30-minute philosophy session, an Ayurvedic deep-healing massage, and a Devotional Music session completes the complimentary inclusions. Our high-quality accommodation and adequate satvik food enhance the benefits of the 7-day long retreats .","The twelve day retreats are customizable as per the attendee's request and health requirements. The complimentary offerings , quality accommodation and essential satvik food are also offered accordingly ." ],
            'german':["3 TAGE R??CKZUG","Das Ziel der dreit??gigen Retreats ist es, Ihnen durch verschiedene Formen der Meditation in Kombination mit Hatha Yoga eine therapeutische Erfahrung zu vermitteln. Die dreit??gigen Retreats helfen Ihnen, das ideale Gleichgewicht zwischen Ihrer geistigen und k??rperlichen Gesundheit zu erreichen, indem sie Frieden bringen, Angst und Stress beseitigen und Aufmerksamkeit und Begeisterung steigern. Die 3-t??gigen Retreats sind die perfekte Option, wenn Sie eine positive Atmosph??re um sich herum aufbauen und Ihre spirituelle Reise beginnen m??chten.","7-TAGE-RETREAT","Die 7-t??gigen Retreats sollen Ihnen ein gr??ndliches Verst??ndnis der Feinheiten spiritueller Praktiken wie verschiedener Meditationsformen und Yoga-Praktiken wie Pranayama und Hatha Yoga vermitteln, um Ihr inneres Selbst wiederzubeleben. Dies wird Sie in eine unvergleichliche Erfahrung von Heilung und Energetisierung einf??hren, sowohl spirituell als auch k??rperlich. Nach den siebent??gigen Retreats werden Sie in der Lage sein, sp??rbare Unterschiede in Stresslevel, Entscheidungsf??higkeit und allgemeiner Lebenseinstellung zu beurteilen. Es ist die beste Wahl f??r Sie, wenn Sie durch Yoga und Meditation Ihre optimistischste, ges??ndeste und spirituell versierteste Seite entdecken m??chten.             "," 12 DAYS RETREAT, ","Die 12-t??gigen Retreats beinhalten eine Reihe personalisierter Meditations- und Yoga-Praktiken, die speziell f??r Sie entwickelt wurden, um Ihre k??rperlichen und geistigen Gesundheitsanforderungen zu erf??llen, Positivit??t zu vermitteln und innere Heilung zu erfahren. Diese Retreats sind die beste Option, wenn Sie die therapeutischen und heilenden Wirkungen spiritueller Praktiken wie Meditation in Kombination mit Yoga nutzen m??chten, um Ihr k??rperliches Wohlbefinden zu transformieren, Ihr inneres Selbst zu revitalisieren und ein neues ICH kennenzulernen. ","Mediation und","Yoga", "R??ckz??ge","Tage","Lernen","Inklusion zur??ckziehen","Veranstaltungstermine und Geb??hrenbeschreibungen","Jetzt bewerben","Die dreit??gigen Retreats umfassen Dhyana, Pranayama und Yoga-Asanas f??r Anf??nger und Fortgeschrittene, 7-Chakren-Heilmeditation sowie kostenlose Aromatherapien, Fu??massagen und ayurvedische Heilmassagen. Diese Retreats bieten Live-Volks Tanzauff??hrungen aus Rajasthani als besondere Attraktion zusammen mit heiteren, ruhigen und hochwertigen Unterk??nften und angemessenem Satvik-Essen. "," Eine Reihe fortgeschrittener Pranayamas und Kriyas, Vinyasa Flow Yoga Asanas, Hatha Yoga und verschiedene Formen von Meditationstechniken, einschlie??lich der Heilung von 7 Chakren, sind alle in dem 7-t??gigen Retreat enthalten, um sicherzustellen, dass positive Energie richtig absorbiert wird. Eine 30-min??tige Philosophie Sitzung, eine ayurvedische Tiefenheilung Massage und eine Andacht Musik Sitzung vervollst??ndigen die kostenlosen Leistungen. Unsere qualitativ hochwertige Unterkunft und angemessenes Satvik-Essen verst??rken die Vorteile der 7-t??gigen Retreats.","Die zw??lft??gigen Retreats sind nach Wunsch und Gesundheitsanforderungen des Teilnehmers anpassbar. Entsprechend werden auch die erg??nzenden Angebote, die hochwertige Unterkunft und das essenzielle Satvik-Essen angeboten."],
            'spanish':["RETIRO DE 3 D??AS","El objetivo de los retiros de tres d??as es brindarte una experiencia terap??utica a trav??s de diferentes formas de meditaci??n combinadas con Hatha Yoga. Los retiros de tres d??as lo ayudan a lograr el equilibrio ideal entre su salud mental y f??sica al brindarle paz, eliminar la ansiedad y el estr??s y aumentar la atenci??n y el entusiasmo. Los retiros de 3 d??as son la opci??n perfecta si quieres establecer un ambiente positivo a tu alrededor y comenzar tu camino espiritual.","RETIRO DE 7 D??AS","Los retiros de 7 d??as est??n dise??ados para brindarle una comprensi??n profunda de las complejidades de las pr??cticas espirituales, como las diferentes formas de meditaci??n y las pr??cticas de yoga, como Pranayama y Hatha Yoga, para revivir su yo interior. Esto lo introducir?? a una experiencia inigualable de sanaci??n y energizaci??n, tanto espiritual como f??sica. Podr??s evaluar diferencias notables en los niveles de estr??s, las habilidades para tomar decisiones y el enfoque general de la vida despu??s de los retiros de siete d??as. Es la mejor opci??n para ti si quieres descubrir tu lado m??s optimista, saludable y espiritualmente adepto a trav??s del Yoga y la Meditaci??n.","RETIRO DE 12 D??AS","Los retiros de 12 d??as incluyen una serie de pr??cticas personalizadas de meditaci??n y yoga creadas espec??ficamente para que cumpla con sus requisitos de salud f??sica y mental, inculque positividad y experimente la curaci??n interior. Estos retiros son la mejor opci??n si desea utilizar los efectos terap??uticos y curativos de las pr??cticas espirituales como la meditaci??n combinada con el yoga para transformar su bienestar f??sico y revitalizar su yo interior y conocer un nuevo USTED. "," Mediaci??n y "," Yoga "," retiros "," d??as "," Aprender "," retiro de inclusi??n "," Fechas del lugar y descripciones de tarifas "," Aplicar ahora ","Los retiros de tres d??as incluyen Dhyana, pranayama y asanas de yoga para principiantes y avanzados, meditaci??n curativa de los 7 chakras, as?? como terapias arom??ticas gratuitas, masajes de pies y masajes curativos ayurv??dicos. Estos retiros ofrecen actuaciones de danza folcl??rica de Rajasthani en vivo como una atracci??n especial junto con alojamiento sereno, tranquilo y de alta calidad y comida s??tvica adecuada. ","Una serie de Pranayamas y Kriyas avanzados, Vinyasa Flow Yoga Asana, Hatha yoga y varias formas de t??cnicas de meditaci??n, incluida la curaci??n de 7 Chakras, se incluyen en el retiro de 7 d??as para garantizar que la energ??a positiva se absorba adecuadamente. Una sesi??n de filosof??a de 30 minutos, un masaje ayurv??dico de sanaci??n profunda y una sesi??n de m??sica devocional completan las inclusiones de cortes??a. Nuestro alojamiento de alta calidad y la comida s??tvica adecuada mejoran los beneficios de los retiros de 7 d??as.","Los retiros de doce d??as se pueden personalizar seg??n la solicitud y los requisitos de salud del asistente. Las ofertas complementarias, el alojamiento de calidad y la comida s??tvica esencial tambi??n se ofrecen en consecuencia."]}
export default class Retreat_page extends Component {
    constructor(props){
        super(props);
        this.state={
            content:[LANG[this.props.lang][0],LANG[this.props.lang][1],LANG[this.props.lang][14]]
        }
    }
  render() {
    console.log(LANG["english"].length);
    const handleChange3=()=>{
        this.setState({...this.state,content:[LANG[this.props.lang][0],LANG[this.props.lang][1],LANG[this.props.lang][14]]})
    }
    const handleChange7=()=>{
        this.setState({...this.state,content:[LANG[this.props.lang][2],LANG[this.props.lang][3],LANG[this.props.lang][15]]})
    }
    const handleChange12=()=>{
        this.setState({...this.state,content:[LANG[this.props.lang][4],LANG[this.props.lang][5],LANG[this.props.lang][16]]})
    }
    return (
      <div className="Retreat_page">
        <div className='heading_RR'>
        <div className='back_B'><Link to={"/"+this.props.lang}><button className='Back_b'><p>{"<"}</p></button></Link></div>
         <p>SAI<img src={om} alt="om"/>YO</p><br/>
         <h1>{LANG[this.props.lang][6]}<br/><span className='text-S'>{LANG[this.props.lang][7]}</span>{LANG[this.props.lang][8]}</h1>
         <div class="graphic">
            <div class="backvec">
            <div className='heading_buttons'>
            <ul className='buttons_h'>
                <li className='button_h'><button onClick={handleChange3}><h3>{"3 "+LANG[this.props.lang][9]}</h3></button></li>
                <li className='button_h'><button onClick={handleChange7}><h3>{"7 "+LANG[this.props.lang][9]}</h3></button></li>
                <li className='button_h'><button onClick={handleChange12}><h3>{"12 "+LANG[this.props.lang][9]}</h3></button></li>
            </ul>
            </div>
            </div>
            <div class="outlinevec"></div>
            <div className='gradient'></div>
        </div>
        </div>
        <div className='content_RR'>
            <div className='sec-1'>
            <div className='Retreats-img-container'>
                <div className='Languages-border-1'></div>
                <img className='Img' src={girl1} />
        </div>
        <div className='Retreats-content-container'>
          <h1 className='text-S'>{this.state.content[0]}</h1>
          <div className='Retreats-courses'>
          </div>
          <p>{this.state.content[1]}</p>
        </div>
        </div>
        <div className='sec-2'>
            <div className='leftside'>
                <div className='border1'></div>
                <div class="lightbox"><h1>{LANG[this.props.lang][10]}</h1></div>
                <div className='border2'></div>
            </div>
            <div className='midside'>
                <h1>{LANG[this.props.lang][11]}</h1>
                <p>{this.state.content[2]}</p>
            </div>
            <div className='img_cont'></div>
        </div>
        <div className='sec-3'>
        <div className='sec3-Img'>
          <div className='back2'/>
          <div className='back1'> </div>
          <img src={girl2} className='box'/>
        </div>
        <div className='sec3-content'>
            <h1>{LANG[this.props.lang][12]}</h1>
            <button className='button-sec3'> <h3>{LANG[this.props.lang][13]}</h3></button>
        </div>
        </div>
        </div>
        <Footer/>
      </div>
    )
  }
}
