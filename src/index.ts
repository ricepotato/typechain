class Block {
    public index:number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timestamp: number;
    constructor(index:number,
        hash: string,
        previousHash: string,
        data: string,
        timestamp: number) {
            this.index = index;
            this.hash = hash;
            this.previousHash = previousHash;
            this.data = data;
            this.timestamp = timestamp;        
    }
}


const genesisBlock: Block = new Block(0, "202020", "", "hello", 12345); 

let blockchain: [Block] = [genesisBlock];

console.log(blockchain);

// blockchain.push("stuff");  string type push 불가


export {}; // typescript rule, 이 파일이 모듈이 된다는 의미.