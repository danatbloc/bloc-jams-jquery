$(function(){

  $('#play-pause').click(function(){
    player.playPause();
    $(this).attr('playState',player.playState)
  });

  $('#next').click(function(){
    if (player.playState !== 'playing') { return; }

    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    const nextSongIndex = currentSongIndex + 1;
    if (nextSongIndex >= album.songs.length) { return; }
    
    const nextSong = album.songs[nextSongIndex];
    player.playPause(nextSong);
  });


});
