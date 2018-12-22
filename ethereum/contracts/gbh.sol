pragma solidity >=0.4.0 <0.6.0;

contract set_of_ads{
    address[] public address_of_ad  ;
    
    function gen_ad(uint min,uint total_money1, string memory investor_return1) public{
            address recvd_add  = address(new ad(min,total_money1,investor_return1,msg.sender));
            address_of_ad.push(recvd_add);
    }
    function get_set() public view returns(address[] memory){
        return address_of_ad;
    }
}



contract ad{
    address public creator;
    mapping(address => bool)  investor_map;
    string investor_return;
    uint public min_value_required;
    uint public total_money ;
    uint no_of_investors;
    struct RFM{
        string type_of_item;
        string item_name;
        uint item_price;
        uint quntity;
        uint vote_cnt;
        bool status;
        mapping(address => bool) voters;
    } 
    
    RFM[] public rfm ;
    
    constructor(uint min,uint total_money1, string memory investor_return1,address author) public {
         creator = author;
         total_money= total_money1; 
         investor_return = investor_return1;
         min_value_required= min;
         no_of_investors= 0;
    }
    function invest_money() public payable{
        require (msg.value > min_value_required);
        investor_map[msg.sender]=true;
        no_of_investors++;
    }
    // function getInfo() public view returns(uint,uint,uint,address) {
    //     return (
    //             min_value_required,
    //             this.balance,
    //             rfm.length,
    //             no_of_investors,
    //             creator
    //     );
    // }
    function gen_RFM(string memory p1,string memory p2,uint price,uint q,bool status1) public {
        require (msg.sender == creator); 
        RFM memory createdRFM  = RFM(p1,p2,price,q,0,status1); 
        
        rfm.push(createdRFM); 
    }
    function vote_yes(uint index) public {
        require(investor_map[msg.sender]);
        
        if(rfm[index].voters[msg.sender]){
            
        }
        else{
            
        rfm[index].voters[msg.sender] = true ; 
            rfm[index].vote_cnt++;
            
        }
        
        
    }
    // function isInvested(address myadd) public view  returns(bool) {
    //     return investor_map[myadd];
    // }
    function get_RFM_len() public view returns(uint){
        require (msg.sender == creator || investor_map[msg.sender]);
        return rfm.length;
    }
    function getSummary() public view returns(uint,uint,uint,address){
        return(
            min_value_required,
            rfm.length,
            no_of_investors,
            creator
            );
    }
    
    function deploy_rfm(uint index) public {
        require (msg.sender == creator);
        
        if (rfm[index].vote_cnt > rfm[index].vote_cnt/2  ){
            rfm[index].status = true;
        }
        
        
    }

}