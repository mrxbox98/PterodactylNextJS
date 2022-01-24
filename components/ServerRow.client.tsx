interface Props {
    name: String,
    allocation: String,
    cpu: number,
    maxCPU: number,
    memory: number,
    maxMemory: number,
    disk: number,
    maxDisk: number,
    status: String
}

const ServerRow = ({ name, allocation, cpu, maxCPU, memory, maxMemory, disk, maxDisk, status }: Props) => {

    return (
        <>
            
        </>
    )

}

export default ServerRow