/**
 * Created by deepa.sainath on 11/23/16.
 */
p {
    font-family: 'helvetica neue', helvetica, sans-serif;
    letter-spacing: 1px;
    text-transform: uppercase;
    text-align: center;
    border: 2px solid rgba(0,0,200,0.6);
    background: rgba(0,0,200,0.3);
    color: rgba(0,0,200,0.6);
    box-shadow: 1px 1px 2px rgba(0,0,200,0.4);
    border-radius: 10px;
    padding: 3px 10px;
    display: inline-block;
    cursor:pointer;
}

var para = document.querySelector('p');

para.addEventListener('click', updateName);

function updateName() {
    var name = prompt('Enter a new name');
    para.textContent = 'Player 1: ' + name;
}