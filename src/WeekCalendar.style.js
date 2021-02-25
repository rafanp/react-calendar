export const eventCardHeight = 130;

export default theme => ({
    weekCalendar: {
        padding: '16px 20px 0 0',
        overflow: 'auto'
    },
    weekCalendarInner: {
        width: '100%',
        height: 'calc(100vh - 10vh - 11.94vh - 17px - 130px)',
        flexDirection: 'row',
        display: 'flex',
        overflowY: 'scroll',
        overflowX: 'hidden',
        alignItems: 'flex-start'  
    },
    weekCalendarHeaderInner: {
        width: '100%',
        flexDirection: 'row',
        display: 'flex',
        overflowY: 'scroll',
        overflowX: 'hidden',
        minHeight: '70px'
    },
    weekCalendarColumn: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    weekCalendarColumnHeader: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: 74
    },
    weekCalendarColumnHeaderDayLabel: {
        color: "#505050",
        fontSize: "24px",
        // fontWeight: "lighter",
        userSelect: "none"
    },
    weekCalendarColumnHeaderDayWeekLabel: {
        color: "#505050",
        fontSize: "16.5px",
        fontFamily: "Poppins",
        // fontWeight: "lighter",
        userSelect: "none"
    },
    weekCalendarColumnHeaderTodayLabel: {
        color: "#F9BE73"
    },
    // weekCalendarEvent: {
    //     width: "100%",
    //     height: eventCardHeight,
    //     minHeight: eventCardHeight,
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     position: 'relative',
    //     cursor: 'pointer',
        
    //     "&>span": {
    //         fontSize: '1.1em !important',
    //         color: '#ccc',
    //         userSelect: 'none'
    //     },

    //     '&>div[role="tooltip"]': {
    //         top: "30% !important",
    //         left: "10px !important",
    //         zIndex: 3
    //     },
    //     '&.last-day > div[role="tooltip"]': {
    //         left: "auto !important",
    //         right: "5px !important"
    //     }
    // }
});
