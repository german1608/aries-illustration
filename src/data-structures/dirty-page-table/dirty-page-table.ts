/**
 * Dirty Page table of ARIES algorithm.
 * It's function is to keep track of tables modified by non-commited transactions
 * at a system failure.
 */
import DirtyPageEntry from './dirty-page-entry'

class DirtyPageTable {
    private table: DirtyPageEntry[] = []

    size () : number {
        return this.table.length
    }
    
    add (entry : DirtyPageEntry) : void {
        const table = this.table.slice()
        table.push(entry)
        this.table = table
    }
}

export default DirtyPageTable
