import moment from 'moment'


export const formDate = (dateString: string): string => {
	const date = moment(dateString, 'YYYYMMDDHHmmss');

	if (moment().isSame(date, 'day')) {
		return moment.duration(date.diff(moment(), 'milliseconds')).humanize(true);
	}

	return date.format('YYYY/MM/DD');
}