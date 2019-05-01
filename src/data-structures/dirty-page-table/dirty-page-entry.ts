/**
 * Entry of dirty page table
 */
interface DirtyPageEntry {
    pageId: string,
    recLSN: number
}

export default DirtyPageEntry
