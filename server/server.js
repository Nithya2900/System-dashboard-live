const express = require('express');
const si = require('systeminformation');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());

app.get('/api/stats', async (req, res) => {
  try {
    const osInfo = await si.osInfo();
    const cpu = await si.currentLoad();
    const mem = await si.mem();
    const disk = await si.fsSize();
    const net = await si.networkStats();
    const battery = await si.battery();
    const uptime = si.time().uptime;

    res.json({
      os: `${osInfo.distro} ${osInfo.release}`,
      arch: osInfo.arch,
      hostname: osInfo.hostname,
      uptime,
      cpuLoad: cpu.currentLoad.toFixed(1),
      memUsed: (mem.used / (1024 ** 3)).toFixed(1),
      memTotal: (mem.total / (1024 ** 3)).toFixed(1),
      diskUsed: (disk[0].used / (1024 ** 3)).toFixed(1),
      diskTotal: (disk[0].size / (1024 ** 3)).toFixed(1),
      netSent: (net[0].tx_bytes / (1024 ** 2)).toFixed(0),
      netRecv: (net[0].rx_bytes / (1024 ** 2)).toFixed(0),
      batteryPercent: battery.hasBattery ? battery.percent.toFixed(1) : 'N/A',
      batteryStatus: battery.isCharging ? 'Charging' : 'Discharging',
    });
  } catch (err) {
    res.status(500).send({ error: 'Failed to retrieve stats' });
  }
});

app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});
