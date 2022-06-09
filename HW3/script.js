const styles = ['Jazz', 'Blues']
document.write(styles + '<br>')
//створився масив з джаз і блюз
styles.push('rock`n`roll')
document.write(styles + '<br>')
//додали рок'н'рол в кінець масиву
function Center(arr) {
	const center = Math.round((arr.length - 1) / 2)
	styles.splice(center, 1, 'Classic')
	document.write(styles + '<br>')
}
Center(styles)
//видалили средній і замінили елемент
const deleted = styles.shift()
document.write(styles + '   масив з видаленим ел' + '<br>')
document.write(deleted + '  видалений ел' + '<br>')
styles.unshift('Rap', 'Reggae')
document.write(styles + '<br>')
//додали 2 ел на початок
