import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { StateService } from '../../services/state/state.service';

// Import cat data
import { catsA } from '../../cats/cat-a/cat-a.component';
import { catsB } from '../../cats/cat-b/cat-b.component';
import { catsC } from '../../cats/cat-c/cat-c.component';
import { catsD } from '../../cats/cat-d/cat-d.component';

@Component({
  selector: 'app-sec-f',
  templateUrl: './sec-f.component.html',
  styleUrl: './sec-f.component.css'
})
export class SecFComponent implements OnInit {
  // Combine all cats from different categories
  cats = [...catsA, ...catsB, ...catsC, ...catsD];
  choosebtn: boolean[] = new Array(this.cats.length).fill(false);
  showSecF: boolean = true;
  youtubePlayer: YT.Player | null = null;

  private songMap: { [key: string]: string } = {
    'Uptown Funk': 'OPf0YbXqDm0',
    'Weightless': '7p2t53J3A6I',
    'Can\'t Help Falling in Love': 'jbB_F7Zby7Y',
    'Stand By Me': 'hwZNL7QVJjE'
  };

  constructor(
    public AuthService: AuthService,
    private StateService: StateService
  ) {}

  ngOnInit() {
    this.StateService.showSecF$.subscribe(showSecF => {
      this.showSecF = showSecF;
    });
  }

  isAuthorized() {
    return this.AuthService.isAuthorized();
  }

  choose(cat: any, index: number) {
    this.choosebtn = this.choosebtn.map(() => false); // Reset all buttons
    this.choosebtn[index] = true; // Set the selected button to true
    this.StateService.setChoose(cat); // Set the chosen cat in the state

    // Ensure the YouTube player is created and ready to play
    this.playSong(cat.song, index);  // Play the general song
    this.playSignatureSong(cat.signatureSongId);  // Play the signature song
  }

  // Play the general song associated with the cat
  playSong(song: string, index: number) {
    const videoId = this.songMap[song as keyof typeof this.songMap];

    if (!videoId) {
      console.error('Video ID not found for song:', song);
      return;
    }

    // Stop any previously playing video and reset the player
    if (this.youtubePlayer) {
      this.youtubePlayer.pauseVideo();
      this.youtubePlayer.loadVideoById(''); // Ensure the player is reset
    }

    // Create a new YouTube player for the chosen song
    this.youtubePlayer = new YT.Player(`youtube-player-${index}`, {
      height: '1',
      width: '1',
      videoId: videoId,
      events: {
        'onReady': (event: YT.PlayerEvent) => {
          event.target.playVideo();
          event.target.setVolume(50);  // Set volume to 50 (adjust as necessary)
        }
      }
    });
  }

  // Play the signature song based on the cat's trait
  playSignatureSong(signatureSongId: string) {
    if (!signatureSongId) {
      return;
    }

    // If a video is already playing, stop it and load the new signature song
    if (this.youtubePlayer) {
      this.youtubePlayer.pauseVideo();
      this.youtubePlayer.loadVideoById(signatureSongId);
    } else {
      // Create a new YouTube player for the signature song
      this.youtubePlayer = new YT.Player('youtube-player', {
        videoId: signatureSongId,
        events: {
          'onReady': (event: YT.PlayerEvent) => {
            event.target.playVideo();
            event.target.setVolume(50);  // Set volume to 50 (adjust as necessary)
          }
        }
      });
    }
  }

  // Track the cat by its unique id or name
  trackByCatId(index: number, cat: any): any {
    return cat.name; // You can use cat.id or another unique property if needed
  }

  ready() {
    if (!this.isAuthorized()) {
      return;
    }
    if (this.choosebtn.some(btn => btn === true)) {
      this.StateService.setReady(true);
      this.StateService.setShowSecF(false);
    }
  }
}
