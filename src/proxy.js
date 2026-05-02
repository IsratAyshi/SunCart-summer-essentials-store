import dns from "node:dns/promises";
dns.setServers(["8.8.8.8", "8.8.4.4"]);