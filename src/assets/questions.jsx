// The questions are from https://www.netacad.com/

export const questions = [
  {
      "question": "Which statement describes the use of powerline networking technology?",
      "answers": ["New “smart” electrical cabling is used to extend an existing home LAN.","A home LAN is installed without the use of physical cabling.","A device connects to an existing home LAN using an adapter and an existing electrical outlet.","Wireless access points use powerline adapters to distribute data through the home LAN."],
      "correct_answer": "A device connects to an existing home LAN using an adapter and an existing electrical outlet."
  },
  {
      "question": "Which interface allows remote management of a Layer 2 switch?",
      "answers": ["the AUX interface","the console port interface","the switch virtual interface","the first Ethernet port interface"],
      "correct_answer": "the switch virtual interface"
  },
  {
      "question": "What is the technician configuring?",
      "answers": ["Telnet access","SVI","password encryption","physical switchport access"],
      "correct_answer": "SVI"
  },
  {
      "question": "What command will prevent all unencrypted passwords from displaying in plain text in a configuration file?",
      "answers": ["(config)# enable password secret","(config)# enable secret Secret_Password","(config-line)# password secret","(config)# service password-encryption","(config)# enable secret Encrypted_Password"],
      "correct_answer": "(config)# service password-encryption"
  },
  {
      "question": "At which layer of the OSI model would a logical address be added during encapsulation?",
      "answers": ["physical layer","data link layer","network layer","transport layer"],
      "correct_answer": "network layer"
  },
  {
      "question": "Which technology provides a secure connection between a SOHO and the headquarters office?",
      "answers": ["VPN","WiMax","QoS","PPPoE"],
      "correct_answer": "VPN"
  },
  {
      "question": "Which route would be used to forward a packet with a source IP address of 192.168.10.1 and a destination IP address of 10.1.1.1?",
      "answers": ["C 192.168.10.0/30 is directly connected, GigabitEthernet0/1","O 10.1.1.0/24 [110/65] via 192.168.200.2, 00:01:20, Serial0/1/0","S* 0.0.0.0/0 [1/0] via 172.16.1.1","S 10.1.0.0/16 is directly connected, GigabitEthernet0/0"],
      "correct_answer": "O 10.1.1.0/24 [110/65] via 192.168.200.2, 00:01:20, Serial0/1/0"
  },
  {
      "question": "What network prefix and prefix-length combination is used to create a default static route that will match any IPv6 destination?",
      "answers": ["FFFF::/128","::1/64","::/128","::/0"],
      "correct_answer": "::/0"
  },
  {
      "question": "What network attack seeks to create a DoS for clients by preventing them from being able to obtain a DHCP lease?",
      "answers": ["DHCP starvation","CAM table attack","IP address spoofing","DHCP spoofing"],
      "correct_answer": "DHCP starvation"
  },
  {
      "question": "Which number represents the most severe level of syslog logging?",
      "answers": ["0","1","6","7"],
      "correct_answer": "0"
  }
  ]
