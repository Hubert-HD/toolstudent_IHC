import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const LinkItemList = () => {
  const {t} = useTranslation()

  return (
    <ul className="container-linkList">
      <LinkItem icon="fas fa-address-book" cartel={t("link.note")} to="/" />
      <LinkItem icon="fas fa-book" cartel={t("link.course")} to="/cursos" />
      <LinkItem icon="fas fa-tasks" cartel={t("link.task")} to="/tareas" />
      <LinkItem icon="fas fa-project-diagram" cartel={t("link.curriculum")} to="/malla-curricular" />
      <LinkItem icon="fas fa-calculator" cartel={t("link.calculator")} to="/calculadora" />
      <LinkItem icon="fas fa-chart-pie" cartel={t("link.charts")} to="/charts" />
      <LinkItem icon="fas fa-sitemap" cartel={t("link.sitemap")} to="/sitemap" />
    </ul>
  )
}

const LinkItem = ({icon, cartel, to}) => {
  const location = useLocation();

  return(
    <li className={"container-linkItem"}>
      <Link className={"linkItem" + (location.pathname === to ? " linkItem-active" : " link--desactive")} to={to}>
        <i className={"iconLink " + icon}/>
        <span className="cartelLink">{cartel}</span>
      </Link>
    </li>
  )
}
  
export default LinkItemList;