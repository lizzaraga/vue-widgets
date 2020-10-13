export enum SchedulerMode{
    day = "day", week = "week", month = "month"
}
export class SchedulerVM{
    public mode = SchedulerMode.day
    public today: Date;
    public weekDays = ['Sun', "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

    constructor(today: Date){
        this.today = today
    }
}

class DayScheduler{

}