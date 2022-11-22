import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tgl-hari-ini',
  templateUrl: './tgl-hari-ini.component.html',
  styleUrls: ['./tgl-hari-ini.component.scss'],
})
export class TglHariIniComponent implements OnInit {
  constructor() {}
  tglstring() {
    let d = new Date();
    let tahun = d.getFullYear();
    let bulan = d.getMonth() + 1;
    let tgl = d.getDate();
    let hr = d.getDay();
    let hari: string = '';
    if (hr == 0) hari = 'Minggu';
    if (hr == 1) hari = 'Senin';
    if (hr == 2) hari = 'Selasa';
    if (hr == 3) hari = 'Rabu';
    if (hr == 4) hari = 'Kamis';
    if (hr == 5) hari = 'Jumat';
    if (hr == 6) hari = 'Sabtu';
    let tgl_str = hari + ', ' + tgl + '-' + bulan + '-' + tahun;
    // console.log(tgl_str);
    return tgl_str;
  }
  tanggal = this.tglstring();

  // tanggal = 'ini  nanti isinya tanggal';

  ngOnInit() {}
}
