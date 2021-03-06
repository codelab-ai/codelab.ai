pid_file = "./pidfile"
exit_after_auth = true

auto_auth {
  method "approle" {
    config = {
      role_id_file_path = "/tmp/role-id"
      secret_id_file_path = "/tmp/secret-id"
    }
  }

  sink "file" {
    config = {
      path = "/tmp/vault-token"
    }
  }
}


template {
  contents = <<EOF
    {{- with secret "codelab-ci/.env" -}}
      {{ range $k, $v := .Data.data }}
      export {{ $k }}='{{ $v }}'
      {{ end }}
    {{- end }}
  EOF
  destination = ".env"
}
