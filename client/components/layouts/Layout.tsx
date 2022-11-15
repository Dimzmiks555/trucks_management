import Link from "next/link";
import React, { FC, ReactNode } from "react";
import s from "./Layout.module.scss";

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  const routes = [
    {
      title: "Главная",
      route: "main",
      children: [
        { title: "Сводка", route: "dashboard" },
        { title: "Налоги", route: "taxes" },
        { title: "Доходы", route: "incomes" },
      ],
    },
    {
      title: "Транспорт",
      route: "transport",
      children: [
        { title: "Показать все", route: "all" },
        { title: "ТО", route: "to" },
        { title: "Ремонтные работы", route: "repair_works" },
        { title: "Топливные расходы", route: "fuel_costs" },
        { title: "Штрафы", route: "penalties" },
        { title: "Платные дороги", route: "toll_roads" },
        { title: "Платон", route: "platon" },
        { title: "Путевые листы", route: "waybills" },
        { title: "Лизинговые платежи", route: "leasing" },
      ],
    },
    {
      title: "Работники",
      route: "employees",
      children: [
        { title: "Показать все", route: "all" },
        { title: "Зарплатные проекты", route: "salary_projects" },
        { title: "Зарплаты", route: "salaries" },
        { title: "Больничные", route: "sick_leaves" },
        { title: "Командировочные", route: "business_trips" },
        { title: "Компенсации", route: "compensations" },
      ],
    },
  ];

  return (
    <div className={s.layout}>
      <aside>
        <div className={s.logo}>
          <img src="/logo.svg"></img>
        </div>
        <nav>
          <ul>
            {routes?.map((link) => (
              <React.Fragment key={link.route}>
                <li>
                  {link.title}
                  <ul>
                    {link.children.map((sublink) => (
                      <Link key={sublink.route} href={`/${link.route}/${sublink.route}`}>
                        <li>{sublink.title}</li>
                      </Link>
                    ))}
                  </ul>
                </li>
              </React.Fragment>
            ))}
          </ul>
        </nav>
        <div className={s.logout}>
            Выйти
        </div>
      </aside>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
