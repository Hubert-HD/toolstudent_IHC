import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import "../../styles/curriculum.scss"

const CurriculumPage = () => {

  const {t} = useTranslation()

  return(
    <div className="subbody">
      <Dropdown name={t("sitemap.dashboard")}>
        <Link className="dropdown__list__item" to="/">{t("sitemap.note")}</Link>
        <Dropdown name={t("sitemap.actions")}>
          <Link className="dropdown__list__item" to="/cursos">{t("sitemap.viewCourse")}</Link>
          <Link className="dropdown__list__item" to="/cursos/add">{t("sitemap.addCourse")}</Link>
          <Link className="dropdown__list__item" to="/cursos">{t("sitemap.editCourse")}</Link>
          <Link className="dropdown__list__item" to="/cursos">{t("sitemap.deleteCourse")}</Link>
        </Dropdown>
        <Link className="dropdown__list__item" to="/tareas">{t("sitemap.addTask")}</Link>
        <Link className="dropdown__list__item" to="/malla-curricular">{t("sitemap.curriculum")}</Link>
        <Link className="dropdown__list__item" to="/calculadora">{t("sitemap.calc")}</Link>
        <Link className="dropdown__list__item" to="/charts">{t("sitemap.graph")}</Link>
        <Link className="dropdown__list__item" to="/sitemap">{t("sitemap.map")}</Link>
      </Dropdown>
      <div className="subbody__img">
        <img className="imagen" src="img/relleno.jpg" alt="relleno.jpg"/>
      </div>
    </div>
  )
}

const Dropdown = ({name, children}) => {
  const [collapsed, setcollapsed] = useState(false)
  
  return(
    <div className="dropdown">
      <span className="dropdown__button" onClick={() => setcollapsed(!collapsed)}>
        {name}
        <i className={"dropdown__button__icon fas fa-caret-" + (collapsed ? "down" : "up")}/>
      </span>
      <div className={"dropdown__list " + (collapsed ? "dropdown__list--collapsed" : "")}>
        {children}
      </div>
    </div>
  )
}
   
export default CurriculumPage