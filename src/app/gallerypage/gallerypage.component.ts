import { Component, OnInit } from '@angular/core';
import {ArtComponent} from "../art";
import {NgxMasonryOptions} from "ngx-masonry";
import {Router} from "@angular/router";

@Component({
  selector: 'app-gallerypage',
  templateUrl: './gallerypage.component.html',
  styleUrls: ['./gallerypage.component.css']
})
export class GallerypageComponent implements OnInit {

  title = 'AlmaShowcase';
  icons: ArtComponent[] = [];
  chibis: ArtComponent[] = [];
  busts: ArtComponent[] = [];
  waists: ArtComponent[] = [];
  fullbodys: ArtComponent[] = [];
  testFolder: String = './tests/';

  chibi = "chibi"
  icon = "icon"
  bust = "bust"
  waist = "waist"
  fullbody = "fullbody"

  galleryCards: ArtComponent[] = [];

  public masonryOptions: NgxMasonryOptions = {
    gutter: 20,
  };

  constructor(private router: Router) {
    this.galleryCards.push(new ArtComponent(this.chibi, "sugar bunny", "temp", "https://media.discordapp.net/attachments/856575891454820412/865663840111689758/kisummi_bg.png?width=338&height=676", true))
    this.galleryCards.push(new ArtComponent(this.chibi, "unicorn gun", "temp", "https://cdn.discordapp.com/attachments/856575891454820412/870834496155574322/sugar_example.png", true))
    this.galleryCards.push(new ArtComponent(this.chibi, "pink bunny doctor", "temp", "https://media.discordapp.net/attachments/856575891454820412/869726324112109568/sardiine_bg_shorter.png?width=676&height=676", true))
    this.galleryCards.push(new ArtComponent(this.chibi, "boba OC", "temp", "https://media.discordapp.net/attachments/856575891454820412/869569818393718814/hojicha.png?width=620&height=676", true))
    this.galleryCards.push(new ArtComponent(this.chibi, "octopus girl", "temp", "https://media.discordapp.net/attachments/856575891454820412/879600026282774528/zae.png?width=430&height=676", false))
    this.galleryCards.push(new ArtComponent(this.chibi, "kame", "temp", "https://media.discordapp.net/attachments/856575891454820412/879599926454140969/kamekosu.png?width=520&height=676", false))
    this.galleryCards.push(new ArtComponent(this.chibi, "bird person", "temp", "https://media.discordapp.net/attachments/856575891454820412/867177389276004372/zae.png?width=614&height=676", false))
    this.galleryCards.push(new ArtComponent(this.chibi, "sad dab", "temp", "https://media.discordapp.net/attachments/856575891454820412/867177383986331658/clara.png?width=430&height=676", false))

    this.galleryCards.push(new ArtComponent(this.icon, "catgirl streamer", "temp", "https://media.discordapp.net/attachments/856575754136453130/865663396480417792/selena.png?width=676&height=676", true))
    this.galleryCards.push(new ArtComponent(this.icon, "pink vamp girl", "temp", "https://media.discordapp.net/attachments/856575754136453130/865663402868080700/serenity.png?width=676&height=676", true))
    this.galleryCards.push(new ArtComponent(this.icon, "mushroom girl", "temp", "https://media.discordapp.net/attachments/856575754136453130/856578100430766080/maisyclip.png?width=676&height=676", true))
    this.galleryCards.push(new ArtComponent(this.icon, "pepee man", "temp", "https://media.discordapp.net/attachments/856575754136453130/865663572067876905/for_jindo.png?width=676&height=676", true))
    this.galleryCards.push(new ArtComponent(this.icon, "blue bunny background", "temp", "https://media.discordapp.net/attachments/856575754136453130/865663405482704906/yumi.png?width=676&height=676", false))
    this.galleryCards.push(new ArtComponent(this.icon, "rose on neck", "temp", "https://media.discordapp.net/attachments/856575754136453130/856576223379849237/riu_riu_bg.png?width=676&height=676", false))
    this.galleryCards.push(new ArtComponent(this.icon, "yellow eyes", "temp", "https://media.discordapp.net/attachments/856575754136453130/856576154772570152/melissai_icn.png?width=676&height=676", false))

    this.galleryCards.push(new ArtComponent(this.bust, "patchwork girl", "temp", "https://media.discordapp.net/attachments/856575777528741959/875471876338638908/sarah2.png?width=676&height=676", true))
    this.galleryCards.push(new ArtComponent(this.bust, "dirty boba", "temp", "https://media.discordapp.net/attachments/856575777528741959/865663685694586910/dirty_boba.png?width=572&height=675", true))
    this.galleryCards.push(new ArtComponent(this.bust, "sugar girl", "temp", "https://media.discordapp.net/attachments/856575777528741959/856578152032501794/ideas.png?width=523&height=676", true))
    this.galleryCards.push(new ArtComponent(this.bust, "girl with wings", "temp", "https://media.discordapp.net/attachments/856575777528741959/856576560151527434/zaethix.png?width=676&height=676", true))
    this.galleryCards.push(new ArtComponent(this.bust, "girl with bat", "temp", "https://media.discordapp.net/attachments/856575777528741959/856576554532339712/steam_sample.png?width=676&height=676", false))
    this.galleryCards.push(new ArtComponent(this.bust, "fancy girl red eyes", "temp", "https://media.discordapp.net/attachments/856575777528741959/856576515608018994/nightengale.png?width=676&height=676", false))
    this.galleryCards.push(new ArtComponent(this.bust, "magic man", "temp", "https://media.discordapp.net/attachments/856575777528741959/856576511154978892/lior.png?width=676&height=676", false))
    this.galleryCards.push(new ArtComponent(this.bust, "butterfly tattoo", "temp", "https://media.discordapp.net/attachments/856575777528741959/856576505878675518/juno.png?width=676&height=676", false))
    this.galleryCards.push(new ArtComponent(this.bust, "brown pretty boy", "temp", "https://media.discordapp.net/attachments/856575777528741959/866402208173129728/reymond.png?width=614&height=676", false))
    this.galleryCards.push(new ArtComponent(this.bust, "pink heart shirt", "temp", "https://media.discordapp.net/attachments/856575777528741959/856576662732275722/rinnie.png?width=676&height=676", false))

    this.galleryCards.push(new ArtComponent(this.waist, "sword baddy", "temp", "https://media.discordapp.net/attachments/856575796881653760/856577698578563112/rin_bg.png?width=541&height=676", true))
    this.galleryCards.push(new ArtComponent(this.waist, "kame laughing", "temp", "https://media.discordapp.net/attachments/856575796881653760/865663804113420288/kame_w_talk.png?width=450&height=676", true))
    this.galleryCards.push(new ArtComponent(this.waist, "png tuber", "temp", "https://media.discordapp.net/attachments/856575796881653760/870445298000994354/vtuber.png?width=473&height=676", true))

    this.galleryCards.push(new ArtComponent(this.fullbody, "anubis", "temp", "https://media.discordapp.net/attachments/856575815231733760/880681424791928882/30612894_t6oIqmFg0iTOT9O.png?width=270&height=675", true))
    this.galleryCards.push(new ArtComponent(this.fullbody, "plasma baddie", "temp", "https://media.discordapp.net/attachments/856575815231733760/869789253679333436/plasma.png?width=520&height=676", true))
    this.galleryCards.push(new ArtComponent(this.fullbody, "mushroom girl", "temp", "https://media.discordapp.net/attachments/856575815231733760/856579137217364018/wick-zola.png?width=315&height=675", true))
    this.galleryCards.push(new ArtComponent(this.fullbody, "zombie girl fire", "temp", "https://media.discordapp.net/attachments/856575815231733760/856578406186614784/sarah_tp.png?width=270&height=675", true))
    this.galleryCards.push(new ArtComponent(this.fullbody, "cat girl", "temp", "https://media.discordapp.net/attachments/856575815231733760/856578657245200414/michi.png?width=338&height=676", false))
    this.galleryCards.push(new ArtComponent(this.fullbody, "big bulge", "temp", "https://media.discordapp.net/attachments/856575815231733760/856579284016955452/emet-markings.png?width=241&height=675", false))
    this.galleryCards.push(new ArtComponent(this.fullbody, "monkey", "temp", "https://media.discordapp.net/attachments/856575815231733760/856579220602880020/hag-vander.png?width=353&height=676", false))

    for (const art of this.galleryCards) {
      if (art.featured) {
        switch (art.category) {
          case this.chibi:
            this.chibis.push(art)
            break;
          case this.icon:
            this.icons.push(art)
            break;
          case this.bust:
            this.busts.push(art)
            break;
          case this.waist:
            this.waists.push(art)
            break;
          case this.fullbody:
            this.fullbodys.push(art)
            break;
          default:
            console.log("Could not identify category, Skipping...");
            break;
        }
      }
      console.log(art); // prints values: 10, 20, 30, 40
    }
  }



  ngOnInit(): void {
  }
}
