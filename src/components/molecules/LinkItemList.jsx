import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const LinkItemList = () => {
  const {t} = useTranslation()
  const history = useHistory();
  const [linkActive, setLinkActive] = useState({
    note : history.location.pathname === "/",
    course: history.location.pathname === "/cursos",
    task: history.location.pathname === "/tareas",
    curriculum: history.location.pathname === "/malla-curricular",
    calculator: history.location.pathname === "/calculadora"
  })
  return (
    <ul className="container-linkList">
      <li className={"container-linkItem"}>
        <Link className={(linkActive.note) ? "linkItem linkItem-active" : "linkItem"} onClick={() => {
            setLinkActive({
              note : true,
              course: false,
              task: false,
              curriculum: false,
              calculator: false
            })
            history.push("/")
          }}>
          <i className={"iconLink fas fa-chart-bar"}></i>
          <span className="cartelLink">{t("link.note")}</span>
        </Link>
      </li>
      <li className={"container-linkItem"}>
        <Link className={(linkActive.course) ? "linkItem linkItem-active" : "linkItem"} onClick={() => {
            setLinkActive({
              note: false,
              course: true,
              task: false,
              curriculum: false,
              calculator: false
            })
            history.push("/cursos")
            }
          }>
          <i className={"iconLink fas fa-book"}></i>
          <span className="cartelLink">{t("link.course")}</span>
        </Link>
      </li>
      <li className={"container-linkItem"}>
        <Link className={(linkActive.task) ? "linkItem linkItem-active" : "linkItem"} onClick={() => {
            setLinkActive({
              note: false,
              course: false,
              task: true,
              curriculum: false,
              calculator: false
            })
            history.push("/tareas")
            }
          }>
          <i className={"iconLink fas fa-tasks"}></i>
          <span className="cartelLink">{t("link.task")}</span>
        </Link>
      </li>
      <li className={"container-linkItem"}>
        <Link className={(linkActive.curriculum) ? "linkItem linkItem-active" : "linkItem"} onClick={() => {
            setLinkActive({
              note: false,
              course: false,
              task: false,
              curriculum: true,
              calculator: false
            })
            history.push("/malla-curricular")
            }
          }>
          <i className={"iconLink fas fa-project-diagram"}></i>
          <span className="cartelLink">{t("link.curriculum")}</span>
        </Link>
      </li>
      <li className={"container-linkItem"}>
        <Link className={(linkActive.calculator) ? "linkItem linkItem-active" : "linkItem"} onClick={() => {
            setLinkActive({
              note: false,
              course: false,
              task: false,
              curriculum: false,
              calculator: true
            })
            history.push("/calculadora")
            }
          }>
          <i className={"iconLink fas fa-calculator"}></i>
          <span className="cartelLink">{t("link.calculator")}</span>
        </Link>
      </li>

      {/* CHANGED */}
      <li className={"container-linkItem"}>
        <Link className={(linkActive.calculator) ? "linkItem linkItem-active" : "linkItem"} onClick={() => {
            setLinkActive({
              note: false,
              course: false,
              task: false,
              curriculum: false,
              calculator: true
            })
            history.push("/charts")
            }
          }>
          <i className={"iconLink fas fa-calculator"}></i>
          <span className="cartelLink">Gráficos</span>  {/* CHANGED */}
          {/* <span className="cartelLink">{t("link.calculator")}</span> */}
        </Link>
      </li>

    </ul>
    )
  }
  
export default LinkItemList;