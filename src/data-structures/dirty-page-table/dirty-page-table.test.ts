import DirtyPageEntry from './dirty-page-entry'
import DirtyPageTable from './dirty-page-table'

const tadName = 'dirty-table-table'


describe(tadName, () => {
    it('should be empty when it\'s created', () => {
        const dirtyPageTable: DirtyPageTable = new DirtyPageTable()
        expect(dirtyPageTable.size()).toEqual(0)
    })

    it('should should be of size 1 when it\'s empty and a new entry is added', () => {
        const entry: DirtyPageEntry = {
            pageId: 'P1000',
            recLSN: 10000
        }
        const dirtyPageTable: DirtyPageTable = new DirtyPageTable()
        dirtyPageTable.add(entry)
        expect(dirtyPageTable.size()).toEqual(1)
    })

})