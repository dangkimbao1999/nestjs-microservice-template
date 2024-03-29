class OtherCommon {
  getValueByOrder<T>(order: number, obj: T): T[keyof T] | undefined {
    // Convert the object values to an array
    const values = Object.values(obj)
    // Adjust for zero-based indexing
    const index = order
    // Return the value at the specified index, or undefined if out of bounds
    return values[index]
  }
}

export default new OtherCommon()
