$(document).ready(function() {
  jQuery('#up-get-monitors-table').DataTable({
    "aaSorting": [],
    "oLanguage": {
      "sInfo": 'Visualisation de _START_ à _END_ sur _TOTAL_ Moniteurs.',
      "sInfoEmpty": 'Pas encore de moniteurs.',
      "sInfoFiltered": 'Filtré sur _MAX_ total Monitors',
      "sZeroRecords": 'Aucun moniteur trouvé',
      "sLengthMenu": 'Visualisation de _MENU_ Moniteurs',
      "sEmptyTable": "Aucun moniteur trouvé pour le moment.",
    }
  });

});
