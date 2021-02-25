import React from "react";
import moment from "moment";
import classNames from "classnames";
import { Grid, withStyles } from "@material-ui/core";
import styles, { eventCardHeight } from "./WeekCalendar.style";

const semanas = [0, 1, 2, 3, 4, 5, 6];
const getDiaDaSemanaConfig = weekNumber => {
  switch (weekNumber) {
    case 0:
      return "domingo";
    case 1:
      return "segunda";
    case 2:
      return "terca";
    case 3:
      return "quarta";
    case 4:
      return "quinta";
    case 5:
      return "sexta";
    case 6:
      return "sabado";
    default:
      return "domingo";
  }
};

const WeekCalendar = props => {
  const {
    selectedDate,
    configVigente,
    agendamentos,
    classes,
    onSelectAgendamento,
    onSelectNovoAgendamento,
    onRemoveAgendamento
  } = props;

  return (
    <Grid
      className={classes.weekCalendar}
      item
      xs={12}
      container
      direction={"column"}
      wrap={"nowrap"}
    >
      <div className={classes.weekCalendarHeaderInner}>
        {semanas.map((week) => {
          const currentDate = moment(selectedDate).weekday(week);
          const today =
            moment(currentDate).format("YYYYMMDD") ===
            moment().format("YYYYMMDD");
          return (
            <div key={week} className={classes.weekCalendarColumn}>
              <div className={classes.weekCalendarColumnHeader}>
                <span
                  className={
                    today
                      ? classNames(
                        classes.weekCalendarColumnHeaderDayWeekLabel,
                        classes.weekCalendarColumnHeaderTodayLabel
                      )
                      : classes.weekCalendarColumnHeaderDayWeekLabel
                  }
                >
                  {currentDate.format("ddd")}
                </span>
                <span
                  className={
                    today
                      ? classNames(
                        classes.weekCalendarColumnHeaderDayLabel,
                        classes.weekCalendarColumnHeaderTodayLabel
                      )
                      : classes.weekCalendarColumnHeaderDayLabel
                  }
                >
                  {currentDate.format("DD")}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </Grid>
  );
};

export default withStyles(styles)(WeekCalendar);

// const WeekCalendar = props => {
//   return (
//     <AgendaSemanal />

//   )};
//   export default (WeekCalendar);

