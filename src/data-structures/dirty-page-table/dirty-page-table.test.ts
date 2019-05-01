import DirtyPageEntry from './dirty-page-entry'
import DirtyPageTable from './dirty-page-table'

const tadName = 'dirty-table-table'


describe(tadName, () => {
    it('should be empty when it\s created', () => {
        const dirtyPageTable: DirtyPageTable = new DirtyPageTable()
        expect(dirtyPageTable.size()).toEqual(0)
    })

})