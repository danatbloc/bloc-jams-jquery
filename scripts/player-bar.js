$(function(){

  $('#play-pause').click(function(){
    player.playPause();
    $(this).attr('playState',player.playState);
  });

  $('#next').click(function(){
    if (player.playState !== 'playing') { return; }

    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    const nextSongIndex = currentSongIndex + 1;
    if (nextSongIndex >= album.songs.length) { return; }

    const nextSong = album.songs[nextSongIndex];
    player.playPause(nextSong);
  });

  $('#time-control input').on('input', function(event) {
      player.skipTo(event.target.value);
  });

  setInterval( ()=>{
    const currentTime = player.getTime();
    const duration = player.getDuration();
    const percent = (currentTime / duration) * 100
    console.log(percent);
    $('#time-control .current-time').text( currentTime );
    $('#time-control input').val(percent);
  }, 1000);

  $('#previous').click(function(){
    if (player.playState !== 'playing') { return; }

    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    const prevSongIndex = currentSongIndex - 1;
    if (prevSongIndex < 0) { return; }

    const prevSong = album.songs[prevSongIndex];
    player.playPause(prevSong);
  });


});
